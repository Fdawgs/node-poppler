/* eslint-disable security/detect-child-process */
const camelCase = require("camelcase");
const path = require("upath");
const { execFile } = require("child_process");
const util = require("util");

const execFileAsync = util.promisify(execFile);

const errorMessages = {
	0: "No Error",
	1: "Error opening a PDF file",
	2: "Error opening an output file",
	3: "Error related to PDF permissions",
	99: "Other error",
	3221226505: "Internal process error",
};

/**
 * @author Frazer Smith
 * @description Check each option provided is valid, of the correct type, and can be used by specified
 * version of binary.
 * @param {object} acceptedOptions - Object containing options that a binary accepts.
 * @param {object} options - Object containing options to pass to binary.
 * @param {string=} version - Version of binary.
 * @returns {Promise<Array|Error>} Promise of array of CLI arguments on resolve, or Error object on rejection.
 */
function parseOptions(acceptedOptions, options, version) {
	return new Promise((resolve, reject) => {
		const args = [];
		const invalidArgs = [];
		Object.keys(options).forEach((key) => {
			if (Object.prototype.hasOwnProperty.call(acceptedOptions, key)) {
				// eslint-disable-next-line valid-typeof
				if (typeof options[key] === acceptedOptions[key].type) {
					// Arg will be empty for some non-standard options
					if (acceptedOptions[key].arg !== "") {
						args.push(acceptedOptions[key].arg);
					}

					if (typeof options[key] !== "boolean") {
						args.push(options[key]);
					}
				} else {
					invalidArgs.push(
						`Invalid value type provided for option '${key}', expected ${
							acceptedOptions[key].type
						} but received ${typeof options[key]}`
					);
				}

				if (
					acceptedOptions[key].minVersion &&
					version &&
					version < acceptedOptions[key].minVersion
				) {
					invalidArgs.push(
						`Invalid option provided for the current version of the binary used. '${key}' was introduced in v${acceptedOptions[key].minVersion}, but received v${version}`
					);
				}
			} else {
				invalidArgs.push(`Invalid option provided '${key}'`);
			}
		});
		if (invalidArgs.length === 0) {
			resolve(args);
		} else {
			reject(new Error(invalidArgs.join("; ")));
		}
	});
}

class Poppler {
	/**
	 * @param {string=} binPath - Path of poppler-utils binaries.
	 * Useful for Linux users who have poppler-utils binaries already installed.
	 */
	constructor(binPath) {
		if (binPath) {
			this.popplerPath = path.normalizeTrim(binPath);
		} else if (process.platform === "win32") {
			this.popplerPath = path.joinSafe(
				__dirname,
				"lib",
				"win32",
				"poppler-21.11.0",
				"Library",
				"bin"
			);
		} else {
			throw new Error(
				`${process.platform} poppler-util binaries are not provided, please pass the installation directory as a parameter to the Poppler instance.`
			);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Embeds files (attachments) into a PDF file.
	 * @param {string} file - Filepath of the PDF file to read.
	 * @param {string} fileToAttach - Filepath of the attachment to be embedded into the PDF file.
	 * @param {string} outputFile - Filepath of the file to output the results to.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {boolean=} options.replace - Replace embedded file with same name (if it exists).
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfAttach(file, fileToAttach, outputFile, options = {}) {
		const acceptedOptions = {
			printVersionInfo: { arg: "-v", type: "boolean" },
			replace: { arg: "-replace", type: "boolean" },
		};

		try {
			const args = await parseOptions(acceptedOptions, options);
			args.push(file);
			args.push(fileToAttach);
			args.push(outputFile);

			const { stdout } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfattach"),
				args
			);
			return Promise.resolve(stdout);
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Lists or extracts embedded files (attachments) from a PDF file.
	 *
	 * @param {string} file - Filepath of the PDF file to read.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {boolean=} options.listEmbedded - List all of the embedded files in the PDF file.
	 * File names are converted to the text encoding specified by `options.outputEncoding`.
	 * @param {string=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {string=} options.outputEncoding - Sets the encoding to use for text output.
	 * This defaults to `UTF-8`.
	 * @param {string=} options.outputPath - Set the file name used when saving an embedded file with
	 * the save option enabled, or the directory if `options.saveall` is used.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {boolean=} options.saveAllFiles - Save all of the embedded files. This uses the file
	 * names associated with the embedded files (as printed by `options.listEmbedded`).
	 * By default, the files are saved in the current directory; this can be changed
	 * with `options.outputPath`.
	 * @param {string=} options.saveFile - Save the specified embedded file.
	 * By default, this uses the file name associated with the embedded file (as printed by
	 * `options.listEmbedded`); the file name can be changed with `options.outputPath`.
	 * @param {number=} options.saveSpecificFile - Save the specified embedded file.
	 * By default, this uses the file name associated with the embedded file (as printed by
	 * `options.listEmbedded`); the file name can be changed with `options.outputPath`.
	 * @param {string=} options.userPassword - User password (for encrypted files).
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfDetach(file, options = {}) {
		const acceptedOptions = {
			listEmbedded: { arg: "-list", type: "boolean" },
			ownerPassword: { arg: "-opw", type: "string" },
			outputEncoding: { arg: "-enc", type: "string" },
			outputPath: { arg: "-o", type: "string" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			saveFile: {
				arg: "-savefile",
				type: "string",
				minVersion: "0.86.0",
			},
			saveAllFiles: { arg: "-saveall", type: "boolean" },
			saveSpecificFile: { arg: "-save", type: "number" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const args = await parseOptions(acceptedOptions, options);
			args.push(file);

			const { stdout } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfdetach"),
				args
			);
			return Promise.resolve(stdout);
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Lists the fonts used in a PDF file along with various information for each font.
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {number=} options.firstPageToExamine - Specifies the first page to examine.
	 * @param {number=} options.lastPageToExamine - Specifies the last page to examine.
	 * @param {boolean=} options.listSubstitutes - List the substitute fonts that poppler
	 * will use for non-embedded fonts.
	 * @param {string=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {string=} options.userPassword - User password (for encrypted files).	 *
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfFonts(file, options = {}) {
		const acceptedOptions = {
			firstPageToExamine: { arg: "-f", type: "number" },
			lastPageToExamine: { arg: "-l", type: "number" },
			listSubstitutes: { arg: "-subst", type: "boolean" },
			ownerPassword: { arg: "-opw", type: "string" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdffonts"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdffonts"),
					args
				);

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async () => {
					if (stdOut !== "") {
						resolve(stdOut.trim());
					} else {
						reject(new Error(stdErr.trim()));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Saves images from a PDF file as PPM, PBM, PNG, TIFF, JPEG, JPEG2000, or JBIG2 files.
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string=} outputPrefix - Filename prefix of output files.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {boolean=} options.allFiles - Write JPEG, JPEG2000, JBIG2, and CCITT images in their native format.
	 * CMYK files are written as TIFF files. All other images are written as PNG files.
	 * @param {boolean=} options.ccittFile - Generate CCITT images as CCITT files.
	 * @param {number=} options.firstPageToConvert - Specifies the first page to convert.
	 * @param {number=} options.lastPageToConvert - Specifies the last page to convert.
	 * @param {boolean=} options.list - Instead of writing the images, list the
	 * images along with various information for each image.
	 * NOTE: Do not specify the outputPrefix with this option.
	 * @param {boolean=} options.jbig2File - Generate JBIG2 images as JBIG2 files.
	 * @param {boolean=} options.jpeg2000File - Generate JPEG2000 images at JP2 files.
	 * @param {boolean=} options.jpegFile - Generate JPEG images as JPEG files.
	 * @param {string=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {boolean=} options.pngFile - Change the default output format to PNG.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {boolean=} options.tiffFile - Change the default output format to TIFF.
	 * @param {string=} options.userPassword - Specify the user password for the PDF file.
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfImages(file, outputPrefix, options = {}) {
		const acceptedOptions = {
			allFiles: { arg: "-all", type: "boolean" },
			ccittFile: { arg: "-ccitt", type: "boolean" },
			firstPageToConvert: { arg: "-f", type: "number" },
			lastPageToConvert: { arg: "-l", type: "number" },
			list: { arg: "-list", type: "boolean" },
			jbig2File: { arg: "-jbig2", type: "boolean" },
			jpeg2000File: { arg: "-jp2", type: "boolean" },
			jpegFile: { arg: "-j", type: "boolean" },
			ownerPassword: { arg: "-opw", type: "string" },
			pngFile: { arg: "-png", type: "boolean" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			tiffFile: { arg: "-tiff", type: "boolean" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfimages"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				if (outputPrefix) {
					args.push(outputPrefix);
				}

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdfimages"),
					args
				);

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async (code) => {
					if (stdOut !== "") {
						resolve(stdOut.trim());
					} else if (code === 0) {
						resolve(errorMessages[code]);
					} else if (stdErr !== "") {
						reject(new Error(stdErr.trim()));
					} else {
						/* istanbul ignore next */
						reject(new Error(errorMessages[code]));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Prints the contents of the `Info` dictionary from a PDF file.
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {number=} options.firstPageToConvert - First page to print.
	 * @param {number=} options.lastPageToConvert - Last page to print.
	 * @param {boolean=} options.listEncodingOptions - List the available encodings.
	 * @param {string=} options.outputEncoding - Sets the encoding to use for text output.
	 * This defaults to `UTF-8`.
	 * @param {string=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {boolean=} options.printAsJson - Print result as a JSON object.
	 * @param {boolean=} options.printBoundingBoxes - Prints the page box bounding boxes:
	 * MediaBox, CropBox, BleedBox, TrimBox, and ArtBox.
	 * @param {boolean=} options.printDocStruct - Prints the logical document structure
	 * of a Tagged-PDF file.
	 * @param {boolean=} options.printDocStructText - Print the textual content along with the
	 * document structure of a Tagged-PDF file. Note that extracting text this way might be slow
	 *
	 * for big PDF files.
	 * @param {boolean=} options.printIsoDates - Prints dates in ISO-8601 format (including the time zone).
	 * @param {boolean=} options.printJS - Prints all JavaScript in the PDF file.
	 * @param {boolean=} options.printMetadata - Prints document-level metadata. (This is the `Metadata`
	 * stream from the PDF file's Catalog object).
	 * @param {boolean=} options.printNamedDests - Print a list of all named destinations. If a page range
	 * is specified using the `options.firstPageToConvert` and `options.lastPageToConvert` options, only destinations
	 * in the page range are listed.
	 * @param {boolean=} options.printRawDates - Prints the raw (undecoded) date strings, directly from the PDF file.
	 * @param {boolean=} options.printUrls - Print all URLs in the PDF; only URLs referenced by PDF objects
	 * such as Link Annotations are listed, not URL strings in the text content.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {string=} options.userPassword - User password (for encrypted files).
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfInfo(file, options = {}) {
		const acceptedOptions = {
			firstPageToConvert: { arg: "-f", type: "number" },
			lastPageToConvert: { arg: "-l", type: "number" },
			listEncodingOptions: { arg: "-listenc", type: "boolean" },
			outputEncoding: { arg: "-enc", type: "string" },
			ownerPassword: { arg: "-opw", type: "string" },
			printAsJson: { arg: "", type: "boolean" },
			printBoundingBoxes: { arg: "-box", type: "boolean" },
			printDocStruct: { arg: "-struct", type: "boolean" },
			printDocStructText: { arg: "-struct-text", type: "boolean" },
			printIsoDates: { arg: "-isodates", type: "boolean" },
			printJS: { arg: "-js", type: "boolean" },
			printMetadata: { arg: "-meta", type: "boolean" },
			printNamedDests: { arg: "-dests", type: "boolean" },
			printRawDates: { arg: "-rawdates", type: "boolean" },
			printUrls: { arg: "-url", type: "boolean", minVersion: "21.11.0" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfinfo"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdfinfo"),
					args
				);

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async () => {
					if (stdOut !== "") {
						if (options.printAsJson === true) {
							/**
							 * Thanks to @sainf for this solution
							 * https://github.com/Fdawgs/node-poppler/issues/248#issuecomment-845948080
							 */
							const info = {};
							stdOut
								.split("\n")
								.map((line) => line.split(": "))
								.forEach((line) => {
									if (line.length > 1)
										info[camelCase(line[0])] =
											line[1].trim();
								});
							resolve(info);
						} else {
							resolve(stdOut.trim());
						}
					} else {
						reject(new Error(stdErr.trim()));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Extract single pages from a PDF file,
	 * and writes one PDF file for each page to outputPattern.
	 * This will not work if the file is encrypted.
	 *
	 * @param {string} file - Filepath of the PDF file to read.
	 * @param {string} outputPattern - Should contain %d (or any variant respecting printf format),
	 * since %d is replaced by the page number.
	 * As an example, `sample-%d.pdf` will produce `sample-1.pdf` for a single page document.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {number=} options.firstPageToExtract - Specifies the first page to extract.
	 * This defaults to page 1.
	 * @param {number=} options.lastPageToExtract - Specifies the last page to extract.
	 * This defaults to the last page of the PDF file.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfSeparate(file, outputPattern, options = {}) {
		const acceptedOptions = {
			firstPageToExtract: { arg: "-f", type: "number" },
			lastPageToExtract: { arg: "-l", type: "number" },
			printVersionInfo: { arg: "-v", type: "boolean" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfseparate"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);
			args.push(file);
			args.push(outputPattern);

			const { stdout } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfseparate"),
				args
			);
			return Promise.resolve(stdout);
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to EPS/JPEG/PDF/PNG/PS/SVG/TIFF.
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string=} outputFile - Filepath of the file to output the results to.
	 *
	 * If `undefined` then will write output to stdout. Using stdout is not valid with image formats
	 * (jpeg, png, and tiff) unless `options.singleFile` is set to `true`.
	 * Encoding is set to `binary` if used with `options.singleFile` or `options.pdfFile`.
	 *
	 * If not set then the output filename will be derived from the PDF file name.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {('default'|'none'|'gray'|'subpixel'|'fast'|'good'|'best')=} options.antialias Set the cairo
	 * antialias option used for text and drawing in image files (or rasterized regions in vector output).
	 * @param {boolean=} options.cropBox - Uses the crop box rather than media box when
	 * generating the files (PNG/JPEG/TIFF only).
	 * @param {number=} options.cropHeight - Specifies the height of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropSize - Specifies the size of crop square in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropWidth - Specifies the width of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropXAxis - Specifies the x-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {number=} options.cropYAxis - Specifies the y-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {boolean=} options.duplex - Adds the %%IncludeFeature: *Duplex DuplexNoTumble DSC
	 * comment to the PostScript file (PS only). This tells the print manager to enable duplexing.
	 * @param {boolean=} options.epsFile - Generate an EPS file. An EPS file contains a single image,
	 * so if you use this option with a multi-page PDF file, you must use `options.firstPageToConvert` and
	 * `options.lastPageToConvert` to specify a single page.
	 * The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used
	 * with this option.
	 * @param {boolean=} options.evenPagesOnly - Generates only the even numbered pages.
	 * @param {boolean=} options.fillPage - Expand PDF pages smaller than the paper to fill the
	 * paper (PS,PDF,SVG only). By default, these pages are not scaled.
	 * @param {number=} options.firstPageToConvert - Specifies the first page to convert.
	 * @param {boolean=} options.grayscaleFile - Generate grayscale file (PNG, JPEG, and TIFF only).
	 * @param {string=} options.iccFile - Use the specified ICC file as the output profile
	 * (PNG only). The profile will be embedded in the PNG file.
	 * @param {boolean=} options.jpegFile - Generate JPEG file(s).
	 * @param {string=} options.jpegOptions - When used with `options.jpegFile`, this option can
	 * be used to control the JPEG compression parameters. It takes a string of the form
	 * `"<opt>=<val>[,<opt>=<val>]"`. Currently available options are:
	 * - `quality` Selects the JPEG quality value. The value must be an integer between 0 and 100.
	 * - `progressive` Select progressive JPEG output. The possible values are "y", "n", indicating
	 * progressive (yes) or non-progressive (no), respectively.
	 * - `optimize` Sets whether to compute optimal Huffman coding tables for the JPEG output, which
	 * will create smaller files but make an extra pass over the data. The value must be "y" or "n",
	 * with "y" performing optimization, otherwise the default Huffman tables are used.
	 *
	 * Example: `"quality=95,optimize=y"`.
	 * @param {number=} options.lastPageToConvert - Specifies the last page to convert.
	 * @param {boolean=} options.monochromeFile - Generate monochrome file (PNG and TIFF only).
	 * @param {boolean=} options.noCenter - By default, PDF pages smaller than the paper
	 * (after any scaling) are centered on the paper. This option causes them to be aligned to
	 * the lower-left corner of the paper instead (PS,PDF,SVG only).
	 * @param {boolean=} options.noCrop - By default, printing output is cropped to the CropBox
	 * specified in the PDF file. This option disables cropping (PS, PDF, SVG only).
	 * @param {boolean=} options.noShrink - Do not scale PDF pages which are larger than the paper
	 * (PS,PDF,SVG only). By default, pages larger than the paper are shrunk to fit.
	 * @param {boolean=} options.oddPagesOnly - Generates only the odd numbered pages.
	 * @param {boolean=} options.originalPageSizes - Set the paper size of each page to match
	 * the size specified in the PDF file.
	 * @param {string=} options.ownerPassword - Specify the owner password for the PDF file.
	 * Providing this will bypass all security restrictions.
	 * @param {number=} options.paperHeight - Set the paper height, in points (PS, PDF, SVG only).
	 * @param {('letter'|'legal'|'A4'|'A3'|'match')=} options.paperSize - Set the paper size to one of `letter`, `legal`, `A4`,
	 * or `A3` (PS,PDF,SVG only). This can also be set to `match`, which will set the paper size
	 * of each page to match the size specified in the PDF file. If none of the paperSize,
	 * paperWidth, or paperHeight options are specified the default is to match the paper size.
	 * @param {number=} options.paperWidth - Set the paper width, in points (PS,PDF,SVG only).
	 * @param {boolean=} options.pdfFile - Generate PDF file.
	 * @param {boolean=} options.pngFile - Generate PNG file(s).
	 * @param {boolean=} options.printVersionInfo - Print copyright and version information.
	 * @param {boolean=} options.psFile - Generate PS file.
	 * @param {boolean=} options.psLevel2 - Generate Level 2 PostScript (PS only).
	 * @param {boolean=} options.psLevel3 - Generate Level 3 PostScript (PS only). This enables all
	 * Level 2 features plus shading patterns and masked images. This is the default setting.
	 * @param {boolean=} options.quiet - Do not print any messages or errors.
	 * @param {number=} options.resolutionXAxis - Specifies the X resolution, in pixels per inch of
	 * image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {number=} options.resolutionXYAxis - Specifies the X and Y resolution, in pixels per
	 * inch of image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {number=} options.resolutionYAxis - Specifies the Y resolution, in pixels per inch of
	 * image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {number=} options.scalePageTo - Scales the long side of each page (width for landscape
	 * pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will
	 * be determined by the aspect ratio of the page (PNG/JPEG/TIFF only).
	 * @param {number=} options.scalePageToXAxis - Scales each page horizontally to fit in scale-to-x
	 * pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of
	 * the page (PNG/JPEG/TIFF only).
	 * @param {number=} options.scalePageToYAxis - Scales each page vertically to fit in scale-to-y
	 * pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of
	 * the page (PNG/JPEG/TIFF only).
	 * @param {boolean=} options.singleFile - Writes only the first page and does not add digits.
	 * Can only be used with `options.jpegFile`, `options.pngFile`, and `options.tiffFile`.
	 * @param {boolean=} options.svgFile - Generate SVG (Scalable Vector Graphics) file.
	 * @param {('none'|'packbits'|'jpeg'|'lzw'|'deflate')=} options.tiffCompression - Set TIFF compression.
	 * @param {boolean=} options.tiffFile - Generate TIFF file(s).
	 * @param {boolean=} options.transparentPageColor - Use a transparent page color
	 * instead of white (PNG and TIFF only).
	 * @param {string=} options.userPassword - Specify the user password for the PDF file.
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfToCairo(file, outputFile, options = {}) {
		const acceptedOptions = {
			antialias: { arg: "-antialias", type: "string" },
			cropBox: { arg: "-cropbox", type: "boolean" },
			cropHeight: { arg: "-H", type: "number" },
			cropSize: { arg: "-sz", type: "number" },
			cropWidth: { arg: "-W", type: "number" },
			cropXAxis: { arg: "-x", type: "number" },
			cropYAxis: { arg: "-y", type: "number" },
			duplex: { arg: "-duplex", type: "boolean" },
			epsFile: { arg: "-eps", type: "boolean" },
			evenPagesOnly: { arg: "-e", type: "boolean" },
			fillPage: { arg: "-expand", type: "boolean" },
			firstPageToConvert: { arg: "-f", type: "number" },
			grayscaleFile: { arg: "-gray", type: "boolean" },
			iccFile: { arg: "-icc", type: "string" },
			jpegFile: { arg: "-jpeg", type: "boolean" },
			jpegOptions: { arg: "-jpegopt", type: "string" },
			lastPageToConvert: { arg: "-l", type: "number" },
			monochromeFile: { arg: "-mono", type: "boolean" },
			noCenter: { arg: "-nocenter", type: "boolean" },
			noCrop: { arg: "-nocrop", type: "boolean" },
			noShrink: { arg: "-noshrink", type: "boolean" },
			oddPagesOnly: { arg: "-o", type: "boolean" },
			originalPageSizes: { arg: "-origpagesizes", type: "boolean" },
			ownerPassword: { arg: "-opw", type: "string" },
			paperHeight: { arg: "-paperh", type: "number" },
			paperSize: { arg: "-paper", type: "string" },
			paperWidth: { arg: "-paperw", type: "number" },
			pdfFile: { arg: "-pdf", type: "boolean" },
			pngFile: { arg: "-png", type: "boolean" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			psFile: { arg: "-ps", type: "boolean" },
			psLevel2: { arg: "-level2", type: "boolean" },
			psLevel3: { arg: "-level3", type: "boolean" },
			quiet: { arg: "-q", type: "boolean" },
			resolutionXAxis: { arg: "-rx", type: "number" },
			resolutionXYAxis: { arg: "-r", type: "number" },
			resolutionYAxis: { arg: "-ry", type: "number" },
			scalePageTo: { arg: "-scale-to", type: "number" },
			scalePageToXAxis: { arg: "-scale-to-x", type: "number" },
			scalePageToYAxis: { arg: "-scale-to-y", type: "number" },
			singleFile: { arg: "-singlefile", type: "boolean" },
			svgFile: { arg: "-svg", type: "boolean" },
			tiffCompression: { arg: "-tiffcompression", type: "string" },
			tiffFile: { arg: "-tiff", type: "boolean" },
			transparentPageColor: { arg: "-transp", type: "boolean" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdftocairo"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				if (outputFile) {
					args.push(outputFile);
				} else {
					args.push("-");
				}

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdftocairo"),
					args
				);

				if (
					outputFile === undefined &&
					args.some((arg) => ["-singlefile", "-pdf"].includes(arg))
				) {
					child.stdout.setEncoding("binary");
				}

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async (code) => {
					if (stdOut !== "") {
						resolve(stdOut.trim());
					} else if (code === 0) {
						resolve(errorMessages[code]);
					} else if (stdErr !== "") {
						reject(new Error(stdErr.trim()));
					} else {
						/* istanbul ignore next */
						reject(new Error(errorMessages[code]));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to HTML.
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string=} outputFile - Filepath of the file to output the results to.
	 * If `undefined` then Poppler will use the directory and name of the original file
	 * and create a new file, with `-html` appended to the end of the filename.
	 *
	 * Required if `file` is a Buffer.
	 *
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {boolean=} options.complexOutput - Generate complex output.
	 * @param {boolean=} options.dataUrls -  Use data URLs instead of external images in HTML.
	 * @param {boolean=} options.exchangePdfLinks - Exchange .pdf links with .html.
	 * @param {boolean=} options.extractHidden - Force hidden text extraction.
	 * @param {number=} options.firstPageToConvert - First page to print.
	 * @param {boolean=} options.fontFullName - Outputs the font name without any substitutions.
	 * @param {boolean=} options.ignoreImages - Ignore images.
	 * @param {('PNG'|'JPG')=} options.imageFormat - Image file format for Splash output (PNG or JPG).
	 * If complexOutput is selected, but imageFormat is not specified, PNG will be assumed.
	 * @param {number=} options.lastPageToConvert - Last page to print.
	 * @param {boolean=} options.noDrm - Override document DRM settings.
	 * @param {boolean=} options.noFrames - Generate no frames. Not supported in complex output mode.
	 * @param {boolean=} options.noMergeParagraph - Do not merge paragraphs.
	 * @param {boolean=} options.noRoundedCoordinates - Do not round coordinates
	 * (with XML output only).
	 * @param {string=} options.outputEncoding - Sets the encoding to use for text output.
	 * This defaults to `UTF-8`.
	 * @param {string=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {boolean=} options.quiet - Do not print any messages or errors.
	 * @param {boolean=} options.singlePage - generate single HTML that includes all pages.
	 * @param {boolean=} options.stdout - Use standard output.
	 * @param {string=} options.userPassword - User password (for encrypted files).
	 * @param {number=} options.wordBreakThreshold - Adjust the word break threshold percent.
	 * Default is 10. Word break occurs when distance between two adjacent characters is greater
	 * than this percent of character height.
	 * @param {boolean=} options.xmlOutput - Output for XML post-processing.
	 * @param {number=} options.zoom - Zoom the PDF document (default 1.5).
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfToHtml(file, outputFile, options = {}) {
		const acceptedOptions = {
			complexOutput: { arg: "-c", type: "boolean" },
			dataUrls: {
				arg: "-dataurls",
				type: "boolean",
				minVersion: "0.75.0",
			},
			exchangePdfLinks: { arg: "-p", type: "boolean" },
			extractHidden: { arg: "-hidden", type: "boolean" },
			firstPageToConvert: { arg: "-f", type: "number" },
			fontFullName: { arg: "-fontfullname", type: "boolean" },
			ignoreImages: { arg: "-i", type: "boolean" },
			imageFormat: { arg: "-fmt", type: "string" },
			lastPageToConvert: { arg: "-l", type: "number" },
			noDrm: { arg: "-nodrm", type: "boolean" },
			noFrames: { arg: "-noframes", type: "boolean" },
			noMergeParagraph: { arg: "-nomerge", type: "boolean" },
			noRoundedCoordinates: { arg: "-noroundcoord", type: "boolean" },
			outputEncoding: { arg: "-enc", type: "string" },
			ownerPassword: { arg: "-opw", type: "string" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			quiet: { arg: "-q", type: "boolean" },
			singlePage: { arg: "-s", type: "boolean" },
			stdout: { arg: "-stdout", type: "boolean" },
			userPassword: { arg: "-upw", type: "string" },
			wordBreakThreshold: { arg: "-wbt", type: "number" },
			xmlOutput: { arg: "-xml", type: "boolean" },
			zoom: { arg: "-zoom", type: "number" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdftohtml"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				if (outputFile) {
					args.push(outputFile);
				}

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdftohtml"),
					args
				);

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async (code) => {
					if (stdOut !== "") {
						resolve(stdOut.trim());
					} else if (code === 0) {
						resolve(errorMessages[code]);
					} else if (stdErr !== "") {
						reject(new Error(stdErr.trim()));
					} else {
						/* istanbul ignore next */
						reject(new Error(errorMessages[code]));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to colour image files in Portable Pixmap (PPM) format,
	 * grayscale image files in Portable Graymap (PGM) format, or monochrome image files
	 * in Portable Bitmap (PBM) format.
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string} outputPath - Filepath to output the results to.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {('yes'|'no')=} options.antialiasFonts - Enable or disable font anti-aliasing.
	 * This defaults to `yes`.
	 * @param {('yes'|'no')=} options.antialiasVectors - Enable or disable vector anti-aliasing.
	 * This defaults to `yes`.
	 * @param {boolean=} options.cropBox - Uses the crop box rather than media box when
	 * generating the files (PNG/JPEG/TIFF only).
	 * @param {number=} options.cropHeight - Specifies the height of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropSize - Specifies the size of crop square in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropWidth - Specifies the width of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropXAxis - Specifies the x-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {number=} options.cropYAxis - Specifies the y-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {string=} options.defaultCmykProfile - If Poppler is compiled with colour management support, this option
	 * sets the DefaultCMYK color space to the ICC profile stored in the display profile file passed.
	 * @param {string=} options.defaultGrayProfile - If Poppler is compiled with colour management support, this option
	 * sets the DefaultGray color space to the ICC profile stored in the display profile file passed.
	 * @param {string=} options.defaultRgbProfile - If Poppler is compiled with colour management support, this option
	 * sets the DefaultRGB color space to the ICC profile stored in the display profile file passed.
	 * @param {string=} options.displayProfile - If Poppler is compiled with colour management support, this option
	 * sets the display profile to the ICC profile stored in the display profile file passed.
	 * @param {boolean=} options.evenPagesOnly - Generates only the even numbered pages.
	 * @param {number=} options.firstPageToConvert - Specifies the first page to convert.
	 * @param {('yes'|'no')=} options.freetype - Enable or disable FreeType (a TrueType / Type 1 font rasterizer).
	 * This defaults to `yes`.
	 * @param {boolean=} options.forcePageNumber - Force page number even if there is only one page.
	 * @param {boolean=} options.grayscaleFile - Generate grayscale PGM file (instead of a color PPM file).
	 * @param {boolean=} options.hideAnnotations - Hide annotations.
	 * @param {boolean=} options.jpegFile - Generate JPEG file instead a PPM file.
	 * @param {number=} options.lastPageToConvert - Specifies the last page to convert.
	 * @param {boolean=} options.monochromeFile - Generate monochrome PBM file (instead of a color PPM file).
	 * @param {boolean=} options.oddPagesOnly - Generates only the odd numbered pages.
	 * @param {string=} options.ownerPassword - Specify the owner password for the PDF file.
	 * Providing this will bypass all security restrictions.
	 * @param {boolean=} options.pngFile - Generate PNG file instead a PPM file.
	 * @param {boolean=} options.printProgress - Print progress info as each page is generated.
	 * Three space-separated fields are printed to STDERR: the number of the current page, the number
	 * of the last page that will be generated, and the path to the file written to.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version information.
	 * @param {boolean=} options.quiet - Do not print any messages or errors.
	 * @param {number=} options.resolutionXAxis - Specifies the X resolution, in pixels per inch of
	 * image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {number=} options.resolutionXYAxis - Specifies the X and Y resolution, in pixels per
	 * inch of image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {number=} options.resolutionYAxis - Specifies the Y resolution, in pixels per inch of
	 * image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {number=} options.scalePageTo - Scales the long side of each page (width for landscape
	 * pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will
	 * be determined by the aspect ratio of the page.
	 * @param {number=} options.scalePageToXAxis - Scales each page horizontally to fit in scale-to-x
	 * pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of
	 * the page.
	 * @param {number=} options.scalePageToYAxis - Scales each page vertically to fit in scale-to-y
	 * pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of
	 * the page.
	 * @param {string=} options.separator - Specify single character separator between name and page number.
	 * @param {boolean=} options.singleFile - Writes only the first page and does not add digits.
	 * @param {('none'|'solid'|'shape')=} options.thinLineMode - Specifies the thin line mode. This defaults to `none`.
	 * @param {('none'|'packbits'|'jpeg'|'lzw'|'deflate')=} options.tiffCompression - Set TIFF compression.
	 * @param {boolean=} options.tiffFile - Generate TIFF file instead a PPM file.
	 * @param {string=} options.userPassword - Specify the user password for the PDF file.
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfToPpm(file, outputPath, options = {}) {
		const acceptedOptions = {
			antialiasFonts: { arg: "-aa", type: "string" },
			antialiasVectors: { arg: "-aaVector", type: "string" },
			cropBox: { arg: "-cropbox", type: "boolean" },
			cropHeight: { arg: "-H", type: "number" },
			cropSize: { arg: "-sz", type: "number" },
			cropWidth: { arg: "-W", type: "number" },
			cropXAxis: { arg: "-x", type: "number" },
			cropYAxis: { arg: "-y", type: "number" },
			defaultCmykProfile: {
				arg: "-defaultcmykprofile",
				type: "string",
				minVersion: "21.01.0",
			},
			defaultGrayProfile: {
				arg: "-defaultgrayprofile",
				type: "string",
				minVersion: "21.01.0",
			},
			defaultRgbProfile: {
				arg: "-defaultrgbprofile",
				type: "string",
				minVersion: "21.01.0",
			},
			displayProfile: {
				arg: "-displayprofile",
				type: "string",
				minVersion: "0.90.0",
			},
			evenPagesOnly: { arg: "-e", type: "boolean" },
			firstPageToConvert: { arg: "-f", type: "number" },
			forcePageNumber: {
				arg: "-forcenum",
				type: "boolean",
				minVersion: "0.75.0",
			},
			freetype: { arg: "-freetype", type: "string" },
			grayscaleFile: { arg: "-gray", type: "boolean" },
			hideAnnotations: {
				arg: "-hide-annotations",
				type: "boolean",
				minVersion: "0.84.0",
			},
			jpegFile: { arg: "-jpeg", type: "boolean" },
			lastPageToConvert: { arg: "-l", type: "number" },
			monochromeFile: { arg: "-mono", type: "boolean" },
			oddPagesOnly: { arg: "-o", type: "boolean" },
			ownerPassword: { arg: "-opw", type: "string" },
			pngFile: { arg: "-png", type: "boolean" },
			printProgress: {
				arg: "-progress",
				type: "boolean",
				minVersion: "21.03.0",
			},
			printVersionInfo: { arg: "-v", type: "boolean" },
			quiet: { arg: "-q", type: "boolean" },
			resolutionXAxis: { arg: "-rx", type: "number" },
			resolutionXYAxis: { arg: "-r", type: "number" },
			resolutionYAxis: { arg: "-ry", type: "number" },
			scalePageTo: { arg: "-scale-to", type: "number" },
			scalePageToXAxis: { arg: "-scale-to-x", type: "number" },
			scalePageToYAxis: { arg: "-scale-to-y", type: "number" },
			separator: { arg: "-sep", type: "string", minVersion: "0.75.0" },
			singleFile: { arg: "-singlefile", type: "boolean" },
			thinLineMode: { arg: "-thinlinemode", type: "string" },
			tiffCompression: { arg: "-tiffcompression", type: "string" },
			tiffFile: { arg: "-tiff", type: "boolean" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdftoppm"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				args.push(outputPath);

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdftoppm"),
					args
				);

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdErr = "";

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async (code) => {
					if (stdErr !== "") {
						reject(new Error(stdErr.trim()));
					} else if (code === 0) {
						resolve(errorMessages[code]);
					} else {
						/* istanbul ignore next */
						reject(new Error(errorMessages[code]));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to PostScript (PS).
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string=} outputFile - Filepath of the file to output the results to.
	 * If `undefined` then will write output to stdout.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {('yes'|'no')=} options.antialias - Enable anti-aliasing on rasterization, accepts `yes` or `no`.
	 * @param {boolean=} options.binary - Write binary data in Level 1 PostScript. By default,
	 * pdftops writes hex-encoded data in Level 1 PostScript. Binary data is non-standard in Level 1
	 * PostScript but reduces the file size and can be useful when Level 1 PostScript is required
	 * only for its restricted use of PostScript operators.
	 * @param {string=} options.defaultCmykProfile - If Poppler is compiled with colour management support, this option
	 * sets the DefaultCMYK color space to the ICC profile stored in the display profile file passed.
	 * @param {string=} options.defaultGrayProfile - If Poppler is compiled with colour management support, this option
	 * sets the DefaultGray color space to the ICC profile stored in the display profile file passed.
	 * @param {string=} options.defaultRgbProfile - If Poppler is compiled with colour management support, this option
	 * sets the DefaultRGB color space to the ICC profile stored in the display profile file passed.
	 * @param {boolean=} options.duplex - Set the Duplex pagedevice entry in the PostScript file.
	 * This tells duplex-capable printers to enable duplexing.
	 * @param {boolean=} options.epsFile - Generate an EPS file. An EPS file contains a single image,
	 * so if you use this option with a multi-page PDF file, you must use `options.firstPageToConvert` and
	 * `options.lastPageToConvert` to specify a single page.
	 * The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used
	 * with this option.
	 * @param {boolean=} options.fillPage - Expand PDF pages smaller than the paper to fill the
	 * paper. By default, these pages are not scaled.
	 * @param {number=} options.firstPageToConvert - Specifies the first page to convert.
	 * @param {number=} options.form - Generate PostScript form which can be imported by software
	 * that understands forms.
	 * A form contains a single page, so if you use this option with a multi-page PDF file,
	 * you must use `options.firstPageToConvert` and `options.lastPageToConvert` to specify a single page.
	 * The `options.level1` option cannot be used with `options.form`.
	 * No more than one of the mode options (`options.epsFile`, `options.form`) may be given.
	 * @param {number=} options.lastPageToConvert - Specifies the last page to convert.
	 * @param {boolean=} options.level1 - Generate Level 1 PostScript. The resulting PostScript
	 * files will be significantly larger (if they contain images), but will print on Level 1 printers.
	 * This also converts all images to black and white.
	 * @param {boolean=} options.level1Sep - Generate Level 1 separable PostScript.
	 * All colors are converted to CMYK. Images are written with separate stream data for the four components.
	 * @param {boolean=} options.level2 - Generate Level 2 PostScript.
	 * Level 2 supports color images and image compression. This is the default setting.
	 * @param {boolean=} options.level2Sep - Generate Level 2 separable PostScript. All colors are
	 * converted to CMYK. The PostScript separation convention operators are used to handle custom (spot) colors.
	 * @param {boolean=} options.level3 - Generate Level 3 PostScript.
	 * This enables all Level 2 featuresplus CID font embedding.
	 * @param {boolean=} options.level3Sep - Generate Level 3 separable PostScript.
	 * The separation handling is the same as for `options.level2Sep`.
	 * @param {boolean=} options.noEmbedCIDFonts - By default, any CID PostScript fonts which are
	 * embedded in the PDF file are copied into the PostScript file. This option disables that embedding.
	 * No attempt is made to substitute for non-embedded CID PostScript fonts.
	 * @param {boolean=} options.noEmbedCIDTrueTypeFonts - By default, any CID TrueType fonts which are
	 * embedded in the PDF file are copied into the PostScript file. This option disables that embedding.
	 * No attempt is made to substitute for non-embedded CID TrueType fonts.
	 * @param {boolean=} options.noEmbedTrueTypeFonts - By default, any TrueType fonts which are embedded
	 * in the PDF file are copied into the PostScript file. This option causes pdfToPs to substitute base fonts instead.
	 * Embedded fonts make PostScript files larger, but may be necessary for readable output.
	 * Also, some PostScript interpreters do not have TrueType rasterizers.
	 * @param {boolean=} options.noEmbedType1Fonts - By default, any Type 1 fonts which are embedded in the PDF file
	 * are copied into the PostScript file. This option causes pdfToPs to substitute base fonts instead.
	 * Embedded fonts make PostScript files larger, but may be necessary for readable output.
	 * @param {boolean=} options.noCenter - By default, PDF pages smaller than the paper
	 * (after any scaling) are centered on the paper. This option causes them to be aligned to
	 * the lower-left corner of the paper instead.
	 * @param {boolean=} options.noCrop - By default, printing output is cropped to the CropBox
	 * specified in the PDF file. This option disables cropping.
	 * @param {boolean=} options.noShrink - Do not scale PDF pages which are larger than the paper.
	 * By default, pages larger than the paper are shrunk to fit.
	 * @param {boolean=} options.opi - Generate OPI comments for all images and forms which have OPI information.
	 * @param {boolean=} options.optimizecolorspace - By default, bitmap images in the PDF pass through to the
	 * output PostScript in their original color space, which produces predictable results.
	 * This option converts RGB and CMYK images into Gray images if every pixel of the image has equal components.
	 * This can fix problems when doing color separations of PDFs that contain embedded black and
	 * white images encoded as RGB.
	 * @param {boolean=} options.originalPageSizes - Set the paper size of each page to match
	 * the size specified in the PDF file.
	 * @param {boolean=} options.overprint - Enable overprinting.
	 * @param {string=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {number=} options.paperHeight - Set the paper height, in points.
	 * @param {('letter'|'legal'|'A4'|'A3'|'match')=} options.paperSize - Set the paper size to one of `letter`, `legal`, `A4`,
	 * or `A3`. This can also be set to `match`, which will set the paper size
	 * of each page to match the size specified in the PDF file. If none of the paperSize,
	 * paperWidth, or paperHeight options are specified the default is to match the paper size.
	 * @param {number=} options.paperWidth - Set the paper width, in points.
	 * @param {boolean=} options.passfonts - By default, references to non-embedded 8-bit fonts
	 * in the PDF file are substituted with the closest `Helvetica`, `Times-Roman`, or `Courier` font.
	 * This option passes references to non-embedded fonts through to the PostScript file.
	 * @param {boolean=} options.preload - Preload images and forms.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version information.
	 * @param {('CMYK8'|'MONO8'|'RGB8')=} options.processColorFormat - Sets the process color format as it is used
	 * during rasterization and transparency reduction.
	 *
	 * The default depends on the other settings: For `options.level1` the default is MONO8; for `options.level1Sep`,
	 * `options.level2Sep`, `options.level3Sep`, or `options.overprint` the default is CMYK8; in all other
	 * cases RGB8 is the default.
	 * If `option.processColorProfile` is set then `options.processColorFormat` is inferred from the specified ICC profile.
	 * @param {string=} options.processColorProfile - Sets the ICC profile that is assumed during
	 * rasterization and transparency reduction.
	 * @param {boolean=} options.quiet - Do not print any messages or errors.
	 * @param {('always'|'never'|'whenneeded')=} options.rasterize - By default, pdfToPs rasterizes pages as needed,
	 * for example, if they contain transparencies. To force rasterization, set `rasterize` to `always`.
	 * Use this to eliminate fonts.
	 * To prevent rasterization, set `rasterize` to `never`.
	 * This may produce files that display incorrectly.
	 * @param {number=} options.resolutionXYAxis - Specifies the X and Y resolution, in pixels per
	 * inch of image files (or rasterized regions in vector output). The default is 300 PPI.
	 * @param {string=} options.userPassword - User password (for encrypted files).
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfToPs(file, outputFile, options = {}) {
		const acceptedOptions = {
			antialias: { arg: "-aaRaster", type: "string" },
			binary: { arg: "-binary", type: "boolean" },
			defaultCmykProfile: {
				arg: "-defaultcmykprofile",
				type: "string",
				minVersion: "21.01.0",
			},
			defaultGrayProfile: {
				arg: "-defaultgrayprofile",
				type: "string",
				minVersion: "21.01.0",
			},
			defaultRgbProfile: {
				arg: "-defaultrgbprofile",
				type: "string",
				minVersion: "21.01.0",
			},
			duplex: { arg: "-duplex", type: "boolean" },
			epsFile: { arg: "-eps", type: "boolean" },
			fillPage: { arg: "-expand", type: "boolean" },
			firstPageToConvert: { arg: "-f", type: "number" },
			form: { arg: "-form", type: "boolean" },
			lastPageToConvert: { arg: "-l", type: "number" },
			level1: { arg: "-level1", type: "boolean" },
			level1Sep: { arg: "-level1sep", type: "boolean" },
			level2: { arg: "-level2", type: "boolean" },
			level2Sep: { arg: "-level2sep", type: "boolean" },
			level3: { arg: "-level3", type: "boolean" },
			level3Sep: { arg: "-level3sep", type: "boolean" },
			noEmbedCIDFonts: { arg: "-noembcidps", type: "boolean" },
			noEmbedCIDTrueTypeFonts: {
				arg: "-noembcidtt",
				type: "boolean",
			},
			noEmbedTrueTypeFonts: { arg: "-noembtt", type: "boolean" },
			noEmbedType1Fonts: { arg: "-noembt1", type: "boolean" },
			noCenter: { arg: "-nocenter", type: "boolean" },
			noCrop: { arg: "-nocrop", type: "boolean" },
			noShrink: { arg: "-noshrink", type: "boolean" },
			opi: { arg: "-opi", type: "boolean" },
			optimizecolorspace: {
				arg: "-optimizecolorspace",
				type: "boolean",
			},
			originalPageSizes: { arg: "-origpagesizes", type: "boolean" },
			overprint: { arg: "-overprint", type: "boolean" },
			ownerPassword: { arg: "-opw", type: "string" },
			paperHeight: { arg: "-paperh", type: "number" },
			paperSize: { arg: "-paper", type: "string" },
			paperWidth: { arg: "-paperw", type: "number" },
			passfonts: { arg: "-passfonts", type: "boolean" },
			preload: { arg: "-preload", type: "boolean" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			processColorProfile: {
				arg: "-processcolorprofile",
				type: "string",
			},
			processColorFormat: { arg: "-processcolorformat", type: "string" },
			quiet: { arg: "-q", type: "boolean" },
			rasterize: {
				args: "-rasterize",
				type: "string",
				minVersion: "0.90.0",
			},
			resolutionXYAxis: { arg: "-r", type: "number" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdftops"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				if (outputFile) {
					args.push(outputFile);
				} else {
					args.push("-");
				}

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdftops"),
					args
				);

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async (code) => {
					if (stdOut !== "") {
						resolve(stdOut.trim());
					} else if (code === 0) {
						resolve(errorMessages[code]);
					} else if (stdErr !== "") {
						reject(new Error(stdErr.trim()));
					} else {
						/* istanbul ignore next */
						reject(new Error(errorMessages[code]));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Converts a PDF file to TXT.
	 *
	 * @param {Buffer| string} file - PDF file as Buffer, or filepath of the PDF file to read.
	 * @param {string=} outputFile - Filepath of the file to output the results to.
	 * If `undefined` then will write output to stdout.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {boolean=} options.boundingBoxXhtml - Generate an XHTML file containing bounding
	 * box information for each word in the file.
	 * @param {boolean=} options.boundingBoxXhtmlLayout - Generate an XHTML file containing
	 * bounding box information for each block, line, and word in the file.
	 * @param {boolean=} options.cropBox - Use the crop box rather than the media box with
	 * `options.boundingBoxXhtml` and `options.boundingBoxXhtmlLayout`
	 * @param {number=} options.cropHeight - Specifies the height of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropWidth - Specifies the width of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {number=} options.cropXAxis - Specifies the x-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {number=} options.cropYAxis - Specifies the y-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {('unix'|'dos'|'mac')=} options.eolConvention - Sets the end-of-line convention to use for
	 * text output: unix; dos; mac.
	 * @param {number=} options.firstPageToConvert - Specifies the first page to convert.
	 * @param {number=} options.fixedWidthLayout - Assume fixed-pitch (or tabular) text, with the
	 * specified character width (in points). This forces physical layout mode.
	 * @param {boolean=} options.generateHtmlMetaFile Generate simple HTML file, including the
	 * meta information. This simply wraps the text in `<pre>` and `</pre>` and prepends the meta headers.
	 * @param {number=} options.lastPageToConvert - Specifies the last page to convert.
	 * @param {boolean=} options.listEncodingOptions - List the available encodings.
	 * @param {boolean=} options.maintainLayout - Maintain (as best as possible) the original physical
	 * layout of the text. The default is to undo physical layout (columns, hyphenation, etc.) and
	 * output the text in reading order.
	 * @param {boolean=} options.noDiagonalText - Discard diagonal text.
	 * @param {boolean=} options.noPageBreaks - Do not insert page breaks (form feed characters)
	 * between pages.
	 * @param {string=} options.outputEncoding - Sets the encoding to use for text output.
	 * This defaults to `UTF-8`.
	 * @param {string=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {boolean=} options.printVersionInfo - Print copyright and version information.
	 * @param {boolean=} options.quiet - Do not print any messages or errors.
	 * @param {boolean=} options.rawLayout - Keep the text in content stream order. This is a
	 * hack which often undoes column formatting, etc. Use of raw mode is no longer recommended.
	 * @param {string=} options.userPassword - User password (for encrypted files).
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfToText(file, outputFile, options = {}) {
		const acceptedOptions = {
			boundingBoxXhtml: { arg: "-bbox", type: "boolean" },
			boundingBoxXhtmlLayout: {
				arg: "-bbox-layout",
				type: "boolean",
			},
			cropBox: {
				arg: "-cropbox",
				type: "boolean",
				minVersion: "21.03.0",
			},
			cropHeight: { arg: "-H", type: "number" },
			cropWidth: { arg: "-W", type: "number" },
			cropXAxis: { arg: "-x", type: "number" },
			cropYAxis: { arg: "-y", type: "number" },
			eolConvention: { arg: "-eol", type: "string" },
			firstPageToConvert: { arg: "-f", type: "number" },
			fixedWidthLayout: { arg: "-fixed", type: "number" },
			generateHtmlMetaFile: { arg: "-htmlmeta", type: "boolean" },
			lastPageToConvert: { arg: "-l", type: "number" },
			listEncodingOptions: { arg: "-listenc", type: "boolean" },
			maintainLayout: { arg: "-layout", type: "boolean" },
			noDiagonalText: {
				arg: "-nodiag",
				type: "boolean",
				minVersion: "0.80.0",
			},
			noPageBreaks: { arg: "-nopgbrk", type: "boolean" },
			outputEncoding: { arg: "-enc", type: "string" },
			ownerPassword: { arg: "-opw", type: "string" },
			printVersionInfo: { arg: "-v", type: "boolean" },
			quiet: { arg: "-q", type: "boolean" },
			rawLayout: { arg: "-raw", type: "boolean" },
			resolution: { arg: "-r", type: "number" },
			userPassword: { arg: "-upw", type: "string" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdftotext"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);

			return new Promise((resolve, reject) => {
				if (Buffer.isBuffer(file)) {
					args.push("-");
				} else {
					args.push(file);
				}

				if (outputFile) {
					args.push(outputFile);
				} else {
					args.push("-");
				}

				const child = execFile(
					path.joinSafe(this.popplerPath, "pdftotext"),
					args
				);

				if (Buffer.isBuffer(file)) {
					child.stdin.write(file);
					child.stdin.end();
				}

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async (code) => {
					if (stdOut !== "") {
						resolve(stdOut.trim());
					} else if (code === 0) {
						resolve(errorMessages[code]);
					} else if (stdErr !== "") {
						reject(new Error(stdErr.trim()));
					} else {
						/* istanbul ignore next */
						reject(new Error(errorMessages[code]));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Merges several PDF files in order of their occurrence in the files array to
	 * one PDF result file.
	 *
	 * @param {Array} files - Filepaths of the PDF files to merge.
	 * An entire directory of PDF files can be merged like so: `path/to/directory/*.pdf`.
	 * @param {string} outputFile - Filepath of the file to output the resulting merged PDF to.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {boolean=} options.printVersionInfo - Print copyright and version information.
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async pdfUnite(files, outputFile, options = {}) {
		const acceptedOptions = {
			printVersionInfo: { arg: "-v", type: "boolean" },
		};

		try {
			const { stderr } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfunite"),
				["-v"]
			);

			const versionInfo = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = await parseOptions(
				acceptedOptions,
				options,
				versionInfo
			);
			files.forEach((element) => {
				args.push(element);
			});
			args.push(outputFile);

			const { stdout } = await execFileAsync(
				path.joinSafe(this.popplerPath, "pdfunite"),
				args
			);
			return Promise.resolve(stdout);
		} catch (err) {
			return Promise.reject(err);
		}
	}
}

module.exports = {
	Poppler,
};
