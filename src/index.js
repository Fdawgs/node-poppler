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
						'poppler-0.68.0',
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
	 * @description Lists or extracts embedded files (attachments) from a PDF.
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
	 * @description Extract single pages from a Portable Document Format (PDF),
	 * and writes one PDF file for each page to outputPattern.
	 * This will not work if the file is encrypted.
	 *
	 * @param {Object=} options
	 * @param {Number=} options.firstPageToExtract - Specifies the first page to extract.
	 * This defaults to page 1.
	 * @param {Number=} options.lastPageToExtract - Specifies the last page to extract.
	 * This defaults to the last page of the PDF.
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
	 * @description Converts PDF to HTML.
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
	 * @description Converts PDF to PNG/JPEG/TIFF/PDF/PS/EPS/SVG.
	 *
	 * @param {Object} options
	 * @param {String=} options.antialias Set the cairo antialias option used for text
	 * and drawing in image files (or rasterized regions in vector output).
	 * Options are: default; none; gray; subpixel; fast; good; best
	 * @param {Boolean=} options.cropBox - Uses the crop box rather than media box when
	 * generating the files (PNG/JPEG/TIFF only).
	 * @param {Number=} options.cropHeight - Specifies the height of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {Number=} options.cropSize - Specifies the size of crop square in pixels
	 * (image output) or points (vector output).
	 * @param {Number=} options.cropWidth - Specifies the width of crop area in pixels
	 * (image output) or points (vector output).
	 * @param {Number=} options.cropXAxis - Specifies the x-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {Number=} options.cropYAxis - Specifies the y-coordinate of the crop area top left
	 * corner in pixels (image output) or points (vector output).
	 * @param {Boolean=} options.duplex - Adds the %%IncludeFeature: *Duplex DuplexNoTumble DSC
	 * comment to the PostScript file (PS only). This tells the print manager to enable duplexing.
	 * @param {Boolean=} options.epsFile - Generate an EPS file. An EPS file contains a single image,
	 * so if you use this option with a multi-page PDF file, you must use -f and -l to specify
	 * a single page. The page size options (originalPageSize, paperSize, paperWidth,
	 * paperHeight) can not be used with this option.
	 * @param {Boolean=} options.evenPagesOnly - Generates only the even numbered pages.
	 * @param {Boolean=} options.fillPage - Expand PDF pages smaller than the paper to fill the
	 * paper (PS,PDF,SVG only). By default, these pages are not scaled.
	 * @param {Number=} options.firstPageToConvert - Specifies the first page to convert.
	 * @param {Boolean=} options.grayscaleFile - Generate a grayscale file (PNG, JPEG, and TIFF only).
	 * @param {Boolean=} options.iccFile - Use the specified ICC file as the output profile
	 * (PNG only). The profile will be embedded in the PNG file.
	 * @param {Boolean=} options.jpegFile - Generates a JPEG file(s).
	 * @param {Number=} options.lastPageToConvert - Specifies the last page to convert.
	 * @param {Boolean=} options.monochromeFile - Generate a monochrome file (PNG and TIFF only).
	 * @param {Boolean=} options.noCenter - By default, PDF pages smaller than the paper
	 * (after any scaling) are centered on the paper. This option causes them to be aligned to
	 * the lower-left corner of the paper instead (PS,PDF,SVG only).
	 * @param {Boolean=} options.noCrop - By default, printing output is cropped to the CropBox
	 * specified in the PDF file. This option disables cropping (PS, PDF, SVG only).
	 * @param {Boolean=} options.noShrink - Don't scale PDF pages which are larger than the paper
	 * (PS,PDF,SVG only). By default, pages larger than the paper are shrunk to fit.
	 * @param {Boolean=} options.oddPagesOnly - Generates only the odd numbered pages.
	 * @param {Boolean=} options.originalPageSizes - Set the paper size of each page to match
	 * the size specified in the PDF file.
	 * @param {String=} options.ownerPassword - Specify the owner password for the PDF file.
	 * Providing this will bypass all security restrictions.
	 * @param {Number=} options.paperHeight - Set the paper height, in points (PS, PDF, SVG only).
	 * @param {String=} options.paperSize - Set the paper size to one of "letter", "legal", "A4",
	 * or "A3" (PS,PDF,SVG only). This can also be set to "match", which will set the paper size
	 * of each page to match the size specified in the PDF file. If none of the paperSize,
	 * paperWidth, or paperHeight options are specified the default is to match the paper size.
	 * @param {Number=} options.paperWidth - Set the paper width, in points (PS,PDF,SVG only).
	 * @param {Boolean=} options.pdfFile - Generates a PDF file.
	 * @param {Boolean=} options.pngFile - Generates a PNG file(s).
	 * @param {Boolean=} options.printVersionInfo - Print copyright and version information.
	 * @param {Boolean=} options.psFile - Generate a PS file.
	 * @param {Boolean=} options.psLevel2 - Generate Level 2 PostScript (PS only).
	 * @param {Boolean=} options.psLevel3 - Generate Level 3 PostScript (PS only). This enables all
	 * Level 2 features plus shading patterns and masked images. This is the default setting.
	 * @param {Boolean=} options.quiet - Don't print any messages or errors.
	 * @param {Number=} options.resolutionXAxis - Specifies the X resolution, in pixels per inch of
	 * image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {Number=} options.resolutionXYAxis - Specifies the X and Y resolution, in pixels per
	 * inch of image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {Number=} options.resolutionYAxis - Specifies the Y resolution, in pixels per inch of
	 * image files (or rasterized regions in vector output). The default is 150 PPI.
	 * @param {Number=} options.scalePageTo - Scales the long side of each page (width for landscape
	 * pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will
	 * be determined by the aspect ratio of the page (PNG/JPEG/TIFF only).
	 * @param {Number=} options.scalePageToXAxis - Scales each page horizontally to fit in scale-to-x
	 * pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of
	 * the page (PNG/JPEG/TIFF only).
	 * @param {Number=} options.scalePageToYAxis - Scales each page vertically to fit in scale-to-y
	 * pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of
	 * the page (PNG/JPEG/TIFF only).
	 * @param {Boolean=} options.singleFile - Writes only the first page and does not add digits.
	 * @param {Boolean=} options.svgFile - Generate a SVG (Scalable Vector Graphics) file.
	 * @param {String=} options.tiffCompression - Set TIFF compression to one of "none", "packbits",
	 * "jpeg", "lzw", or "deflate".
	 * @param {Boolean=} options.tiffFile - Generates a TIFF file(s).
	 * @param {Boolean=} options.transparentPageColor - Use a transparent page color
	 * instead of white (PNG and TIFF only).
	 * @param {String=} options.userPassword - Specify the user password for the PDF file.
	 * @param {String} file - Filepath of the PDF file to read.
	 * @param {String=} outputFile - Filepath of the file to output the results to.
	 * @returns {Promise}
	 */
	pdfToCairo(options, file, outputFile) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				antialias: { arg: '-antialias', type: 'string' },
				cropBox: { arg: '-cropbox', type: 'boolean' },
				cropHeight: { arg: '-H', type: 'number' },
				cropSize: { arg: '-sz', type: 'number' },
				cropWidth: { arg: '-W', type: 'number' },
				cropXAxis: { arg: '-x', type: 'number' },
				cropYAxis: { arg: '-y', type: 'number' },
				duplex: { arg: '-duplex', type: 'boolean' },
				epsFile: { arg: '-eps', type: 'boolean' },
				evenPagesOnly: { arg: '-e', type: 'boolean' },
				fillPage: { arg: '-expand', type: 'boolean' },
				firstPageToConvert: { arg: '-f', type: 'number' },
				grayscaleFile: { arg: '-gray', type: 'boolean' },
				iccFile: { arg: '-icc', type: 'string' },
				jpegFile: { arg: '-jpeg', type: 'boolean' },
				lastPageToConvert: { arg: '-l', type: 'number' },
				monochromeFile: { arg: '-mono', type: 'boolean' },
				noCenter: { arg: '-nocenter', type: 'boolean' },
				noCrop: { arg: '-nocrop', type: 'boolean' },
				noShrink: { arg: '-noshrink', type: 'boolean' },
				oddPagesOnly: { arg: '-o', type: 'boolean' },
				originalPageSizes: { arg: '-origpagesizes', type: 'boolean' },
				ownerPassword: { arg: '-opw', type: 'string' },
				paperHeight: { arg: '-paperh', type: 'number' },
				paperSize: { arg: '-paper', type: 'string' },
				paperWidth: { arg: '-paperw', type: 'number' },
				pdfFile: { arg: '-pdf', type: 'boolean' },
				pngFile: { arg: '-png', type: 'boolean' },
				printVersionInfo: { arg: '-v', type: 'boolean' },
				psFile: { arg: '-ps', type: 'boolean' },
				psLevel2: { arg: '-level2', type: 'boolean' },
				psLevel3: { arg: '-level3', type: 'boolean' },
				quiet: { arg: '-q', type: 'boolean' },
				resolutionXAxis: { arg: '-rx', type: 'number' },
				resolutionXYAxis: { arg: '-r', type: 'number' },
				resolutionYAxis: { arg: '-ry', type: 'number' },
				scalePageTo: { arg: '-scale-to', type: 'number' },
				scalePageToXAxis: { arg: '-scale-to-x', type: 'number' },
				scalePageToYAxis: { arg: '-scale-to-y', type: 'number' },
				singleFile: { arg: '-singlefile', type: 'boolean' },
				svgFile: { arg: '-svg', type: 'boolean' },
				tiffCompression: { arg: '-tiffcompression', type: 'string' },
				tiffFile: { arg: '-tiff', type: 'boolean' },
				transparentPageColor: { arg: '-transp', type: 'boolean' },
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

			execFile(path.join(this.popplerPath, 'pdftocairo'), args, (err, stdout) => {
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
}

module.exports = {
	Poppler
};
