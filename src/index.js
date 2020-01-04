const os = require('os');
const path = require('path');
const { execFile } = require('child_process');

const platform = os.platform();

/**
 * @param {Object} options
 * @param {Object} acceptedOptions
 * @param {Array} args
 */
function parseOptions(options, acceptedOptions, args) {
	return new Promise((resolve, reject) => {
		Object.keys(options).forEach((key) => {
			if (Object.prototype.hasOwnProperty.call(acceptedOptions, key)) {
				// eslint-disable-next-line valid-typeof
				if (typeof options[key] === acceptedOptions[key].type) {
					args.push(acceptedOptions[key].arg);
					if (typeof options[key] !== 'boolean') {
						args.push(options[key]);
					}
				} else {
					reject(new Error(`Invalid value type provided for option '${key}', expected ${acceptedOptions[key].type} but recieved ${typeof options[key]}`));
				}
			} else {
				reject(new Error(`Invalid option provided '${key}'`));
			}
		});
		resolve(args);
	});
}

class Poppler {
	/**
	 * @param {String=} binPath - Path of poppler-utils binaries.
	 * Useful for Linux users who have poppler-utils binaries already installed.
	 */
	constructor(binPath) {
		if (binPath) {
			this.popplerPath = binPath;
		} else {
			let popplerPath;

			// Build path to Poppler binaries based on OS
			switch (platform) {
				// Windows OS
				case 'win32':
					popplerPath = path.join(
						__dirname,
						'lib',
						'win32',
						'poppler-0.84.0',
						'bin'
					);
					break;

				// macOS
				case 'darwin':
					popplerPath = path.join(
						__dirname,
						'lib',
						'darwin',
						'poppler-0.66.0',
						'bin'
					);
					break;

				default:
					return new Error(`${platform} is NOT supported.`);
			}

			this.popplerPath = popplerPath;
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Lists or extracts embedded files (attachments) from a PDF file.
	 *
	 * @param {Object=} options
	 * @param {Boolean=} options.listEmbedded - List all of the embedded files in the PDF file.
	 * File names are converted to the text encoding specified by the 'outputEncoding' option.
	 * @param {String=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {String=} options.outputEncoding - Sets the encoding to use for text output.
	 * This defaults to "UTF-8".
	 * @param {String=} options.outputPath - Set the file name used when saving an embedded file with
	 * the save option enabled, or the directory if the 'saveall' option is used.
	 * @param {Boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {Boolean=} options.saveAllFiles - Save all of the embedded files. This uses the file
	 * names associated with the embedded files (as printed by the 'listEmbedded' option).
	 * By default, the files are saved in the current directory; this can be changed
	 * with the 'outputPath' option.
	 * @param {Number=} options.saveSpecificFile - Save the specified embedded file.
	 * By default, this uses the file name associated with the embedded file (as printed by the
	 * 'listEmbedded' option); the file name can be changed with the 'outputPath' option.
	 * @param {String=} options.userPassword - User password (for encrypted files).
	 * @param {String} file - Filepath of the PDF file to read.
	 * @returns {Promise}
	 */
	pdfDetach(options, file) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				listEmbedded: { arg: '-list', type: 'boolean' },
				ownerPassword: { arg: '-opw', type: 'string' },
				outputEncoding: { arg: '-enc', type: 'string' },
				outputPath: { arg: '-o', type: 'string' },
				printVersionInfo: { arg: '-v', type: 'boolean' },
				saveAllFiles: { arg: '-saveall', type: 'boolean' },
				saveSpecificFile: { arg: '-save', type: 'number' },
				userPassword: { arg: '-upw', type: 'string' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
			if (options) {
				parseOptions(options, acceptedOptions, args)
					.catch((err) => {
						reject(err);
					});
			}

			args.push(file);

			execFile(path.join(this.popplerPath, 'pdfdetach'), args, (err, stdout) => {
				if (err) {
					reject(err);
				} else {
					resolve(stdout);
				}
			});
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Lists the fonts used in a PDF file along with various information for each font.
	 *
	 * @param {Object=} options
	 * @param {Number=} options.firstPageToExamine - Specifies the first page to examine.
	 * @param {Number=} options.lastPageToExamine - Specifies the last page to examine.
	 * @param {Boolean=} options.listSubstitutes - List the substitute fonts that poppler
	 * will use for non-embedded fonts.
	 * @param {String=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {Boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {String=} options.userPassword - User password (for encrypted files).
	 * @param {String} file - Filepath of the PDF file to read.
	 * @returns {Promise}
	 */
	pdfFonts(options, file) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				firstPageToExamine: { arg: '-f', type: 'number' },
				lastPageToExamine: { arg: '-l', type: 'number' },
				listSubstitutes: { arg: '-subst', type: 'boolean' },
				ownerPassword: { arg: '-opw', type: 'string' },
				printVersionInfo: { arg: '-v', type: 'boolean' },
				userPassword: { arg: '-upw', type: 'string' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
			if (options) {
				parseOptions(options, acceptedOptions, args)
					.catch((err) => {
						reject(err);
					});
			}

			args.push(file);

			execFile(path.join(this.popplerPath, 'pdffonts'), args, (err, stdout) => {
				if (err) {
					reject(err);
				} else {
					resolve(stdout);
				}
			});
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Extract single pages from a PDF file,
	 * and writes one PDF file for each page to outputPattern.
	 * This will not work if the file is encrypted.
	 *
	 * @param {Object=} options
	 * @param {Number=} options.firstPageToExtract - Specifies the first page to extract.
	 * This defaults to page 1.
	 * @param {Number=} options.lastPageToExtract - Specifies the last page to extract.
	 * This defaults to the last page of the PDF file.
	 * @param {Boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {String} file - Filepath of the PDF file to read.
	 * @param {String} outputPattern - Should contain %d (or any variant respecting printf format),
	 * since %d is replaced by the page number.
	 * As an example, 'sample-%d.pdf' will produce 'sample-1.pdf' for a single page document.
	 * @returns {Promise}
	 */
	pdfSeparate(options, file, outputPattern) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				firstPageToExtract: { arg: '-f', type: 'number' },
				lastPageToExtract: { arg: '-l', type: 'number' },
				printVersionInfo: { arg: '-v', type: 'boolean' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
			if (options) {
				parseOptions(options, acceptedOptions, args)
					.catch((err) => {
						reject(err);
					});
			}

			args.push(file);
			args.push(outputPattern);

			execFile(path.join(this.popplerPath, 'pdfseparate'), args, (err, stdout) => {
				if (err) {
					reject(err);
				} else {
					resolve(stdout);
				}
			});
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Converts PDF file to HTML.
	 * Poppler will use the directory and name of the original file
	 * and append '-html' to the end of the filename.
	 *
	 * @param {Object=} options
	 * @param {Boolean=} options.complexOutput - Generate complex output.
	 * @param {Boolean=} options.exchangePdfLinks - Exchange .pdf links with .html.
	 * @param {Boolean=} options.extractHidden - Force hidden text extraction.
	 * @param {Number=} options.firstPageToConvert - First page to print.
	 * @param {Boolean=} options.fontFullName - Outputs the font name without any substitutions.
	 * @param {Boolean=} options.ignoreImages - Ignore images.
	 * @param {String=} options.imageFormat - Image file format for Splash output (PNG or JPG).
	 * If complexOutput is selected, but imageFormat is not specified, PNG will be assumed.
	 * @param {Number=} options.lastPageToConvert - Last page to print.
	 * @param {Boolean=} options.noDrm - Override document DRM settings.
	 * @param {Boolean=} options.noFrames - Generate no frames. Not supported in complex output mode.
	 * @param {Boolean=} options.noMergeParagraph - Do not merge paragraphs.
	 * @param {Boolean=} options.noRoundedCoordinates - Do not round coordinates
	 * (with XML output only).
	 * @param {String=} options.outputEncoding - Sets the encoding to use for text output.
	 * This defaults to "UTF-8".
	 * @param {String=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {Boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {Boolean=} options.quiet - Do not print any messages or errors.
	 * @param {Boolean=} options.singlePage - generate single HTML that includes all pages.
	 * @param {Boolean=} options.stdout - Use standard output.
	 * @param {String=} options.userPassword - User password (for encrypted files).
	 * @param {Number=} options.wordBreakThreshold - Adjust the word break threshold percent.
	 * Default is 10. Word break occurs when distance between two adjacent characters is greater
	 * than this percent of character height.
	 * @param {Boolean=} options.xmlOutput - Output for XML post-processing.
	 * @param {Number=} options.zoom - Zoom the PDF document (default 1.5).
	 * @param {String} file - Filepath of the PDF file to read.
	 * @returns {Promise}
	 */
	pdfToHtml(options, file) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				complexOutput: { arg: '-c', type: 'boolean' },
				exchangePdfLinks: { arg: '-p', type: 'boolean' },
				extractHidden: { arg: '', type: 'boolean' },
				firstPageToConvert: { arg: '-f', type: 'number' },
				fontFullName: { arg: '-fontfullname', type: 'boolean' },
				ignoreImages: { arg: '-i', type: 'boolean' },
				imageFormat: { arg: '-fmt', type: 'string' },
				lastPageToConvert: { arg: '-l', type: 'number' },
				noDrm: { arg: '-nodrm', type: 'boolean' },
				noFrames: { arg: '-noframes', type: 'boolean' },
				noMergeParagraph: { arg: '-nomerge', type: 'boolean' },
				noRoundedCoordinates: { arg: '-noroundcoord', type: 'boolean' },
				outputEncoding: { arg: '-enc', type: 'string' },
				ownerPassword: { arg: '-opw', type: 'string' },
				printVersionInfo: { arg: '-v', type: 'boolean' },
				quiet: { arg: '-q', type: 'boolean' },
				singlePage: { arg: '-s', type: 'boolean' },
				stdout: { arg: '-stdout', type: 'boolean' },
				userPassword: { arg: '-upw', type: 'string' },
				wordBreakThreshold: { arg: '-wbt', type: 'number' },
				xmlOutput: { arg: '-xml', type: 'boolean' },
				zoom: { arg: '-zoom', type: 'number' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
			if (options) {
				parseOptions(options, acceptedOptions, args)
					.catch((err) => {
						reject(err);
					});
			}

			args.push(file);

			execFile(path.join(this.popplerPath, 'pdftohtml'), args, (err, stdout) => {
				if (err) {
					reject(err);
				} else {
					resolve(stdout);
				}
			});
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Converts PDF to TXT.
	 *
	 * @param {Object=} options
	 * @param {Boolean=} options.boundingBoxXhtml Generate an XHTML file containing bounding
	 * box information for each word in the file.
	 * @param {Boolean=} options.boundingBoxXhtmlLayout Generate an XHTML file containing
	 * bounding box information for each block, line, and word in the file.
	 * @param {Number=} options.cropHeight - Specifies the height of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {Number=} options.cropWidth - Specifies the width of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {Number=} options.cropXAxis - Specifies the x-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {Number=} options.cropYAxis - Specifies the y-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {String=} options.eolConvention - Sets the end-of-line convention to use for
	 * text output: unix | dos | mac.
	 * @param {Number=} options.firstPageToConvert - Specifies the first page to convert.
	 * @param {Number=} options.fixedWidthLayout - Assume fixed-pitch (or tabular) text, with the
	 * specified character width (in points). This forces physical layout mode.
	 * @param {Boolean=} options.generateHtmlMetaFile Generate a simple HTML file, including the
	 * meta information. This simply wraps the text in <pre> and </pre> and prepends the meta headers.
	 * @param {Number=} options.lastPageToConvert - Specifies the last page to convert.
	 * @param {Boolean=} options.listEncodingOptions - List the available encodings.
	 * @param {Boolean=} options.maintainLayout - Maintain (as best as possible) the original physical
	 * layout of the text. The default is to ´undo' physical layout (columns, hyphenation, etc.) and
	 * output the text in reading order.
	 * @param {Boolean=} options.noPageBreaks - Don't insert page breaks (form feed characters)
	 * between pages.
	 * @param {String=} options.outputEncoding - Sets the encoding to use for text output.
	 * This defaults to "UTF-8".
	 * @param {String=} options.ownerPassword - Owner password (for encrypted files).
	 * @param {Boolean=} options.printVersionInfo - Print copyright and version information.
	 * @param {Boolean=} options.quiet - Don't print any messages or errors.
	 * @param {Boolean=} options.rawLayout - Keep the text in content stream order. This is a
	 * hack which often "undoes" column formatting, etc. Use of raw mode is no longer recommended.
	 * @param {String=} options.userPassword - User password (for encrypted files).
	 * @param {String} file - Filepath of the PDF file to read.
	 * @param {String=} outputFile - Filepath of the file to output the results to.
	 * @returns {Promise}
	 */
	pdfToText(options, file, outputFile) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				boundingBoxXhtml: { arg: '-bbox', type: 'boolean' },
				boundingBoxXhtmlLayout: { arg: '-bbox-layout', type: 'boolean' },
				cropHeight: { arg: '-H', type: 'number' },
				cropWidth: { arg: '-W', type: 'number' },
				cropXAxis: { arg: '-x', type: 'number' },
				cropYAxis: { arg: '-y', type: 'number' },
				eolConvention: { arg: '-eol', type: 'string' },
				firstPageToConvert: { arg: '-f', type: 'number' },
				fixedWidthLayout: { arg: '-fixed', type: 'number' },
				generateHtmlMetaFile: { arg: '-htmlmeta', type: 'boolean' },
				lastPageToConvert: { arg: '-l', type: 'number' },
				listEncodingOptions: { arg: '-listenc', type: 'boolean' },
				maintainLayout: { arg: '-layout', type: 'boolean' },
				noPageBreaks: { arg: '-nopgbrk', type: 'boolean' },
				outputEncoding: { arg: '-enc', type: 'string' },
				ownerPassword: { arg: '-opw', type: 'string' },
				printVersionInfo: { arg: '-v', type: 'boolean' },
				quiet: { arg: '-q', type: 'boolean' },
				rawLayout: { arg: '-raw', type: 'boolean' },
				resolution: { arg: '-r', type: 'number' },
				userPassword: { arg: '-upw', type: 'string' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
			if (options) {
				parseOptions(options, acceptedOptions, args)
					.catch((err) => {
						reject(err);
					});
			}

			args.push(file);
			if (outputFile) {
				args.push(outputFile);
			}

			execFile(path.join(this.popplerPath, 'pdftotext'), args, (err, stdout) => {
				if (err) {
					reject(err);
				} else {
					resolve(stdout);
				}
			});
		});
	}

	/**
	 * @author Frazer Smith
	 * @description Merges several PDF files in order of their occurrence in the files array to
	 * one PDF result file.
	 *
	 * @param {Object=} options
	 * @param {Boolean=} options.printVersionInfo - Print copyright and version information.
	 * @param {Array} files - Filepaths of the PDF files to merge.
	 * An entire directory of PDF files can be merged like so: 'path/to/directory/*.pdf'.
	 * @param {String=} outputFile - Filepath of the file to output the resulting merged PDF to.
	 * @returns {Promise}
	 */
	pdfUnite(options, files, outputFile) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				printVersionInfo: { arg: '-v', type: 'boolean' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
			if (options) {
				parseOptions(options, acceptedOptions, args)
					.catch((err) => {
						reject(err);
					});
			}

			files.forEach((element) => {
				args.push(element);
			});

			if (outputFile) {
				args.push(outputFile);
			}

			execFile(path.join(this.popplerPath, 'pdfunite'), args, (err, stdout) => {
				if (err) {
					reject(err);
				} else {
					resolve(stdout);
				}
			});
		});
	}
}

module.exports = {
	Poppler
};
