"use strict";

const { execFile, spawn, spawnSync } = require("node:child_process");
const { basename, normalize, resolve: pathResolve } = require("node:path");
const { platform } = require("node:process");
const { promisify } = require("node:util");
const camelCase = require("camelcase");
const freeze = require("ice-barrage");
const { lt } = require("semver");

const execFileAsync = promisify(execFile);

/**
 * @type {Readonly<Record<string, string>>}
 * @ignore
 */
const ERROR_MSGS = Object.freeze({
	0: "No Error",
	1: "Error opening a PDF file",
	2: "Error opening an output file",
	3: "Error related to PDF permissions",
	4: "Error related to ICC profile",
	99: "Other error",
	3221226505: "Internal process error",
});

// Cache immutable regex as they are expensive to create and garbage collect
const POPPLER_VERSION_REG = /(\d{1,2}\.\d{1,2}\.\d{1,2})/u;
const PDF_INFO_FILE_SIZES_REG = /(File\s+size:\s+)0(\s+)bytes/u;
const PDF_INFO_PATH_REG = /(.+)pdfinfo/u;

/**
 * @typedef {object} OptionDetails
 * @property {string} arg The argument to pass to the binary.
 * @property {('boolean'|'number'|'string')} type The type of the option.
 * @property {string} [minVersion] The minimum version of the binary that supports this option.
 * @property {string} [maxVersion] The maximum version of the binary that supports this option.
 */

/**
 * @typedef {Record<string, OptionDetails>} PopplerAcceptedOptions
 * @typedef {import("./options/pdfattach").PdfAttachOptions} PdfAttachOptions
 * @typedef {import("./options/pdfdetach").PdfDetachOptions} PdfDetachOptions
 * @typedef {import("./options/pdfimages").PdfImagesOptions} PdfImagesOptions
 * @typedef {import("./options/pdffonts").PdfFontsOptions} PdfFontsOptions
 * @typedef {import("./options/pdfinfo").PdfInfoOptions} PdfInfoOptions
 * @typedef {import("./options/pdfseparate").PdfSeparateOptions} PdfSeparateOptions
 * @typedef {import("./options/pdftocairo").PdfToCairoOptions} PdfToCairoOptions
 * @typedef {import("./options/pdftohtml").PdfToHtmlOptions} PdfToHtmlOptions
 * @typedef {import("./options/pdftoppm").PdfToPpmOptions} PdfToPpmOptions
 * @typedef {import("./options/pdftops").PdfToPsOptions} PdfToPsOptions
 * @typedef {import("./options/pdftotext").PdfToTextOptions} PdfToTextOptions
 * @typedef {import("./options/pdfunite").PdfUniteOptions} PdfUniteOptions
 * @typedef {(PdfAttachOptions|PdfDetachOptions|PdfFontsOptions|PdfImagesOptions|PdfInfoOptions|PdfSeparateOptions|PdfToCairoOptions|PdfToHtmlOptions|PdfToPpmOptions|PdfToPsOptions|PdfToTextOptions|PdfUniteOptions)} PopplerOptions
 */

/**
 * @typedef {object} PopplerExtraOptions
 * @property {AbortSignal} [signal] An `AbortSignal` that can be used to cancel the operation.
 */

/**
 * @author Frazer Smith
 * @description Executes a Poppler binary with the provided arguments and file input.
 * @ignore
 * @param {string} binary - Path to the binary to execute.
 * @param {string[]} args - Array of CLI arguments to pass to the binary.
 * @param {Buffer|string} [file] - File input (Buffer or path).
 * @param {object} [options] - Object containing execution options.
 * @param {boolean} [options.binaryOutput] - Set binary encoding for stdout.
 * @param {boolean} [options.ignoreExitCode] - If true, resolve based on stdout presence regardless of exit code.
 * @param {boolean} [options.preserveWhitespace] - If true, preserves leading and trailing whitespace in the output.
 * @param {AbortSignal} [options.signal] - An `AbortSignal` that can be used to cancel the operation.
 * @returns {Promise<string>} A promise that resolves with stdout, or rejects with an Error.
 */
function execBinary(binary, args, file, options = {}) {
	return new Promise((resolve, reject) => {
		const child = spawn(binary, args, { signal: options.signal });

		if (options.binaryOutput) {
			child.stdout.setEncoding("binary");
		}

		if (Buffer.isBuffer(file)) {
			child.stdin.write(file);
			child.stdin.end();
		}

		let stdOut = "";
		let stdErr = "";
		let errorHandled = false;

		child.stdout.on("data", (data) => {
			stdOut += data;
		});

		child.stderr.on("data", (data) => {
			stdErr += data;
		});

		child.on("error", (err) => {
			errorHandled = true;
			reject(err);
		});

		child.on("close", (code) => {
			// If an error was already emitted, don't process the close event
			if (errorHandled) {
				return;
			}

			// For binaries without reliable exit codes, resolve based on stdout presence
			if (options.ignoreExitCode) {
				if (stdOut !== "") {
					resolve(
						options.preserveWhitespace ? stdOut : stdOut.trim()
					);
				} else {
					reject(new Error(stdErr.trim()));
				}
				return;
			}

			if (stdOut !== "") {
				resolve(options.preserveWhitespace ? stdOut : stdOut.trim());
			} else if (code === 0) {
				resolve(ERROR_MSGS[code]);
			} else if (stdErr !== "") {
				reject(new Error(stdErr.trim()));
			} else {
				reject(
					new Error(
						ERROR_MSGS[code ?? -1] ||
							`${basename(binary)} ${args.join(" ")} exited with code ${code}`
					)
				);
			}
		});
	});
}

/**
 * @author Frazer Smith
 * @description Checks each option provided is valid, of the correct type, and can be used by the
 * specified version of the binary.
 * @ignore
 * @ignore
 * @param {PopplerAcceptedOptions} acceptedOptions - Object containing accepted options.
 * @param {PopplerOptions} options - Object containing options to pass to the binary.
 * @param {string} [version] - Semantic version of the binary.
 * @returns {string[]} Array of CLI arguments.
 * @throws {Error} If invalid arguments provided.
 */
function parseOptions(acceptedOptions, options, version) {
	/** @type {string[]} */
	const args = [];
	/** @type {string[]} */
	const invalidArgs = [];

	// Imperative loops are faster than functional loops, see https://romgrk.com/posts/optimizing-javascript
	const keys = Object.keys(options);
	const keysLength = keys.length;
	for (let i = 0; i < keysLength; i += 1) {
		const key = keys[i];
		if (!Object.hasOwn(acceptedOptions, key)) {
			invalidArgs.push(`Invalid option provided '${key}'`);
			continue;
		}

		// @ts-expect-error: Keys are from options, TS cannot infer this
		const option = options[key];
		const acceptedOption = acceptedOptions[key];
		const optionType = typeof option;

		if (acceptedOption.type === optionType) {
			// Boolean options set to false won't be passed to the binary; skip arg and version checks
			if (acceptedOption.type === "boolean" && !option) {
				continue;
			}

			// Arg will be empty for some non-standard options
			if (acceptedOption.arg !== "") {
				args.push(acceptedOption.arg);
			}

			if (optionType !== "boolean") {
				args.push(option);
			}
		} else {
			invalidArgs.push(
				`Invalid value type provided for option '${key}', expected ${
					acceptedOption.type
				} but received ${optionType}`
			);
		}

		if (
			acceptedOption.minVersion &&
			version &&
			lt(version, acceptedOption.minVersion, { loose: true })
		) {
			invalidArgs.push(
				`Invalid option provided for the current version of the binary used. '${key}' was introduced in v${acceptedOption.minVersion}, but received v${version}`
			);
		}
	}
	if (invalidArgs.length === 0) {
		return args;
	}
	throw new Error(invalidArgs.join("; "));
}

class Poppler {
	#popplerPath;

	#pdfAttachBin;
	#pdfDetachBin;
	#pdfFontsBin;
	#pdfImagesBin;
	#pdfInfoBin;
	#pdfSeparateBin;
	#pdfToCairoBin;
	#pdfToHtmlBin;
	#pdfToPpmBin;
	#pdfToPsBin;
	#pdfToTextBin;
	#pdfUniteBin;

	#binVersions = new Map();
	#acceptedOptions = new Map();

	/**
	 * @param {string} [binPath] - Path to the directory containing the poppler-utils binaries.
	 * If not provided, the constructor will attempt to find the Poppler `pdfinfo` binary
	 * in the PATH environment variable and use that as the path for all binaries.
	 * For `win32` the binaries are bundled with the package and will be used
	 * if local binaries cannot be found.
	 * @throws {Error} If the Poppler binaries cannot be found.
	 */
	constructor(binPath) {
		this.#popplerPath = "";

		/* istanbul ignore else: requires specific OS */
		if (binPath) {
			/** @type {string|undefined} */
			this.#popplerPath = binPath;
		} else {
			// Use regex over dirname as `where` on Windows returns a newline-delimited list
			const which = spawnSync(platform === "win32" ? "where" : "which", [
				"pdfinfo",
			]).stdout.toString();
			const popplerPath = PDF_INFO_PATH_REG.exec(which)?.[1];

			if (popplerPath) {
				this.#popplerPath = popplerPath;
			}

			if (platform === "win32" && !popplerPath) {
				try {
					// @ts-ignore: Optional dependency
					// eslint-disable-next-line n/global-require -- Conditional require
					this.#popplerPath = require("node-poppler-win32");
				} catch {
					// Leave #popplerPath empty; the generic "Unable to find ... binaries" error below will fire
				}
			}
		}

		if (!this.#popplerPath) {
			throw new Error(
				`Unable to find ${platform} Poppler binaries, please pass the path to the binaries' directory as an argument to the Poppler constructor.`
			);
		}
		this.#popplerPath = normalize(this.#popplerPath);

		this.#pdfAttachBin = pathResolve(this.#popplerPath, "pdfattach");
		this.#pdfDetachBin = pathResolve(this.#popplerPath, "pdfdetach");
		this.#pdfFontsBin = pathResolve(this.#popplerPath, "pdffonts");
		this.#pdfImagesBin = pathResolve(this.#popplerPath, "pdfimages");
		this.#pdfInfoBin = pathResolve(this.#popplerPath, "pdfinfo");
		this.#pdfSeparateBin = pathResolve(this.#popplerPath, "pdfseparate");
		this.#pdfToCairoBin = pathResolve(this.#popplerPath, "pdftocairo");
		this.#pdfToHtmlBin = pathResolve(this.#popplerPath, "pdftohtml");
		this.#pdfToPpmBin = pathResolve(this.#popplerPath, "pdftoppm");
		this.#pdfToPsBin = pathResolve(this.#popplerPath, "pdftops");
		this.#pdfToTextBin = pathResolve(this.#popplerPath, "pdftotext");
		this.#pdfUniteBin = pathResolve(this.#popplerPath, "pdfunite");
	}

	/**
	 * @description Returns the path of the Poppler binaries.
	 * @returns {string} Path of the Poppler binaries' directory.
	 */
	get path() {
		return this.#popplerPath;
	}

	/**
	 * @author Frazer Smith
	 * @description Returns the version of the specified Poppler binary.
	 * @param {string} binary - The Poppler binary to get the version of.
	 * @returns {Promise<string>} A promise that resolves with the version of the binary, or rejects with an `Error` object.
	 */
	async #getVersion(binary) {
		if (!this.#binVersions.has(binary)) {
			const { stderr } = await execFileAsync(binary, ["-v"]);
			// @ts-expect-error: parseOptions checks if falsy
			const version = POPPLER_VERSION_REG.exec(stderr)[1];
			this.#binVersions.set(binary, version);
		}
		return this.#binVersions.get(binary);
	}

	/**
	 * @author Frazer Smith
	 * @description Returns the accepted options for the specified Poppler binary function.
	 * @param {string} functionName - The name of the Poppler binary function.
	 * @returns {PopplerAcceptedOptions} An object containing the accepted options of the specified function.
	 */
	#getAcceptedOptions(functionName) {
		if (!this.#acceptedOptions.has(functionName)) {
			switch (functionName) {
				case "pdfAttach":
					this.#acceptedOptions.set(
						"pdfAttach",
						freeze(require("./options/pdfattach"))
					);
					break;
				case "pdfDetach":
					this.#acceptedOptions.set(
						"pdfDetach",
						freeze(require("./options/pdfdetach"))
					);
					break;
				case "pdfFonts":
					this.#acceptedOptions.set(
						"pdfFonts",
						freeze(require("./options/pdffonts"))
					);
					break;
				case "pdfImages":
					this.#acceptedOptions.set(
						"pdfImages",
						freeze(require("./options/pdfimages"))
					);
					break;
				case "pdfInfo":
					this.#acceptedOptions.set(
						"pdfInfo",
						freeze(require("./options/pdfinfo"))
					);
					break;
				case "pdfSeparate":
					this.#acceptedOptions.set(
						"pdfSeparate",
						freeze(require("./options/pdfseparate"))
					);
					break;
				case "pdfToCairo":
					this.#acceptedOptions.set(
						"pdfToCairo",
						freeze(require("./options/pdftocairo"))
					);
					break;
				case "pdfToHtml":
					this.#acceptedOptions.set(
						"pdfToHtml",
						freeze(require("./options/pdftohtml"))
					);
					break;
				case "pdfToPpm":
					this.#acceptedOptions.set(
						"pdfToPpm",
						freeze(require("./options/pdftoppm"))
					);
					break;
				case "pdfToPs":
					this.#acceptedOptions.set(
						"pdfToPs",
						freeze(require("./options/pdftops"))
					);
					break;
				case "pdfToText":
					this.#acceptedOptions.set(
						"pdfToText",
						freeze(require("./options/pdftotext"))
					);
					break;
				case "pdfUnite":
					this.#acceptedOptions.set(
						"pdfUnite",
						freeze(require("./options/pdfunite"))
					);
					break;
			}
		}

		return this.#acceptedOptions.get(functionName);
	}

	/**
	 * @author Frazer Smith
	 * @description Embeds files (attachments) into a PDF file.
	 * @param {string} file - Filepath of the PDF file to read.
	 * @param {string} fileToAttach - Filepath of the attachment to be embedded into the PDF file.
	 * @param {string} outputFile - Filepath of the file to output the results to.
	 * @param {PdfAttachOptions} [options] - Options to pass to the pdfattach binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfAttach(file, fileToAttach, outputFile, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfAttach");
		const args = parseOptions(acceptedOptions, options);
		args.push(file, fileToAttach, outputFile);

		return execBinary(this.#pdfAttachBin, args, undefined, { signal });
	}

	/**
	 * @author Frazer Smith
	 * @description Lists or extracts embedded files (attachments) from a PDF file.
	 * @param {string} file - Filepath of the PDF file to read.
	 * @param {PdfDetachOptions} [options] - Options to pass to the pdfdetach binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfDetach(file, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfDetach");
		const args = parseOptions(acceptedOptions, options);
		args.push(file);

		const { stdout } = await execFileAsync(this.#pdfDetachBin, args, {
			signal,
		});
		return stdout;
	}

	/**
	 * @author Frazer Smith
	 * @description Lists the fonts used in a PDF file along with various information for each font.
	 * @param {(Buffer|string)} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {PdfFontsOptions} [options] - Options to pass to the pdffonts binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfFonts(file, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfFonts");
		const versionInfo = await this.#getVersion(this.#pdfFontsBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(Buffer.isBuffer(file) ? "-" : file);

		return execBinary(this.#pdfFontsBin, args, file, { signal });
	}

	/**
	 * @author Frazer Smith
	 * @description Saves images from a PDF file as PPM, PBM, PNG, TIFF, JPEG, JPEG2000, or JBIG2 files.
	 * @param {(Buffer|string)} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string} [outputPrefix] - Filename prefix of output files.
	 * @param {PdfImagesOptions} [options] - Options to pass to the pdfimages binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfImages(file, outputPrefix, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfImages");
		const versionInfo = await this.#getVersion(this.#pdfImagesBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);

		args.push(Buffer.isBuffer(file) ? "-" : file);

		if (outputPrefix) {
			args.push(outputPrefix);
		}

		return execBinary(this.#pdfImagesBin, args, file, { signal });
	}

	/**
	 * @author Frazer Smith
	 * @description Prints the contents of the `Info` dictionary from a PDF file.
	 * @param {(Buffer|string)} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {PdfInfoOptions} [options] - Options to pass to the pdfinfo binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<Record<string, string>|string>} A promise that resolves with a stdout string or JSON object if
	 * `options.printAsJson` is `true`, or rejects with an `Error` object.
	 */
	async pdfInfo(file, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfInfo");
		const versionInfo = await this.#getVersion(this.#pdfInfoBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);

		// Fetch file size if stdin input is a Buffer, as Poppler omits it
		/** @type {number} */
		let fileSize;

		if (Buffer.isBuffer(file)) {
			args.push("-");
			fileSize = file.length;
		} else {
			args.push(file);
		}

		return new Promise((resolve, reject) => {
			const child = spawn(this.#pdfInfoBin, args, { signal });

			if (Buffer.isBuffer(file)) {
				child.stdin.write(file);
				child.stdin.end();
			}

			let stdOut = "";
			let stdErr = "";
			let errorHandled = false;

			child.stdout.on("data", (data) => {
				stdOut += data;
			});

			child.stderr.on("data", (data) => {
				stdErr += data;
			});

			child.on("error", (err) => {
				errorHandled = true;
				reject(err);
			});

			child.on("close", (code) => {
				// If an error was already emitted, don't process the close event
				if (errorHandled) {
					return;
				}

				if (stdOut !== "") {
					if (fileSize) {
						stdOut = stdOut.replace(
							PDF_INFO_FILE_SIZES_REG,
							`$1${fileSize}$2bytes`
						);
					}

					if (options.printAsJson === true) {
						/** @type {Record<string, string>} */
						const info = {};
						const stdOutLines = stdOut.split("\n");
						const stdOutLinesLength = stdOutLines.length;
						for (let i = 0; i < stdOutLinesLength; i += 1) {
							const line = stdOutLines[i];
							const lines = line.split(": ");
							if (lines.length > 1) {
								info[camelCase(lines[0])] = lines[1].trim();
							}
						}
						resolve(info);
					} else {
						resolve(stdOut.trim());
					}
				} else if (code === 0) {
					resolve(ERROR_MSGS[code]);
				} else if (stdErr !== "") {
					reject(new Error(stdErr.trim()));
				} else {
					reject(
						new Error(
							ERROR_MSGS[code ?? -1] ||
								`pdfinfo ${args.join(
									" "
								)} exited with code ${code}`
						)
					);
				}
			});
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Extracts single pages from a PDF file,
	 * and writes one PDF file for each page to outputPattern.
	 * This will not work if the file is encrypted.
	 * @param {string} file - Filepath of the PDF file to read.
	 * @param {string} outputPattern - Should contain %d (or any variant respecting printf format),
	 * since %d is replaced by the page number.
	 * As an example, `sample-%d.pdf` will produce `sample-1.pdf` for a single page document.
	 * @param {PdfSeparateOptions} [options] - Options to pass to the pdfseparate binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfSeparate(file, outputPattern, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfSeparate");
		const versionInfo = await this.#getVersion(this.#pdfSeparateBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(file, outputPattern);

		return execBinary(this.#pdfSeparateBin, args, undefined, { signal });
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to EPS/JPEG/PDF/PNG/PS/SVG/TIFF.
	 * @param {Buffer|string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string} [outputFile] - Filepath of the file to output the results to.
	 *
	 * If `undefined` then will write output to stdout. Using stdout is not valid with image formats
	 * (jpeg, png, and tiff) unless `options.singleFile` is set to `true`.
	 * Encoding is set to `binary` if used with `options.singleFile` or `options.pdfFile`.
	 *
	 * If not set then the output filename will be derived from the PDF file name.
	 * @param {PdfToCairoOptions} [options] - Options to pass to the pdftocairo binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfToCairo(file, outputFile, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfToCairo");
		const versionInfo = await this.#getVersion(this.#pdfToCairoBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(Buffer.isBuffer(file) ? "-" : file, outputFile || "-");

		const binaryOutput =
			outputFile === undefined &&
			args.some((arg) => ["-singlefile", "-pdf"].includes(arg));

		return execBinary(this.#pdfToCairoBin, args, file, {
			binaryOutput,
			signal,
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to HTML.
	 * @param {(Buffer|string)} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string} [outputFile] - Filepath of the file to output the results to.
	 * If `undefined` then Poppler will use the directory and name of the original file
	 * and create a new file, with `-html` appended to the end of the filename.
	 *
	 * Required if `file` is a Buffer.
	 * @param {PdfToHtmlOptions} [options] - Options to pass to the pdftohtml binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfToHtml(file, outputFile, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfToHtml");
		const versionInfo = await this.#getVersion(this.#pdfToHtmlBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(Buffer.isBuffer(file) ? "-" : file);

		if (outputFile) {
			args.push(outputFile);
		}

		return execBinary(this.#pdfToHtmlBin, args, file, {
			ignoreExitCode: true,
			signal,
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to colour image files in Portable Pixmap (PPM) format,
	 * grayscale image files in Portable Graymap (PGM) format, or monochrome image files
	 * in Portable Bitmap (PBM) format.
	 * @param {(Buffer|string)} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string} outputPath - Filepath to output the results to.
	 * @param {PdfToPpmOptions} [options] - Options to pass to the pdftoppm binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfToPpm(file, outputPath, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfToPpm");
		const versionInfo = await this.#getVersion(this.#pdfToPpmBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(Buffer.isBuffer(file) ? "-" : file, outputPath);

		return execBinary(this.#pdfToPpmBin, args, file, { signal });
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to PostScript (PS).
	 * @param {(Buffer|string)} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string} [outputFile] - Filepath of the file to output the results to.
	 * If `undefined` then will write output to stdout.
	 * @param {PdfToPsOptions} [options] - Options to pass to the pdftops binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfToPs(file, outputFile, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfToPs");
		const versionInfo = await this.#getVersion(this.#pdfToPsBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(Buffer.isBuffer(file) ? "-" : file, outputFile || "-");

		return execBinary(this.#pdfToPsBin, args, file, { signal });
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to TXT.
	 * @param {(Buffer|string)} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string} [outputFile] - Filepath of the file to output the results to.
	 * If `undefined` then will write output to stdout.
	 * @param {PdfToTextOptions} [options] - Options to pass to the pdftotext binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfToText(file, outputFile, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfToText");
		const versionInfo = await this.#getVersion(this.#pdfToTextBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(Buffer.isBuffer(file) ? "-" : file, outputFile || "-");

		return execBinary(this.#pdfToTextBin, args, file, {
			preserveWhitespace: options.maintainLayout,
			signal,
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Merges several PDF files in order of their occurrence in the files array to
	 * one PDF result file.
	 * @param {string[]} files - Filepaths of the PDF files to merge.
	 * An entire directory of PDF files can be merged like so: `path/to/directory/*.pdf`.
	 * @param {string} outputFile - Filepath of the file to output the resulting merged PDF to.
	 * @param {PdfUniteOptions} [options] - Options to pass to the pdfunite binary.
	 * @param {PopplerExtraOptions} [extras] - Extra options.
	 * @returns {Promise<string>} A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async pdfUnite(files, outputFile, options = {}, extras = {}) {
		const { signal } = extras;
		const acceptedOptions = this.#getAcceptedOptions("pdfUnite");
		const versionInfo = await this.#getVersion(this.#pdfUniteBin);
		const args = parseOptions(acceptedOptions, options, versionInfo);
		args.push(...files, outputFile);

		return execBinary(this.#pdfUniteBin, args, undefined, { signal });
	}
}

module.exports.default = Poppler; // ESM default export
module.exports.Poppler = Poppler; // TypeScript and named export
