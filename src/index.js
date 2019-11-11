const os = require('os');
const path = require('path');
const { execFile } = require('child_process');

const platform = os.platform();

class Poppler {
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
					console.error(`${platform} is NOT supported.`);
					process.exit(1);
					break;
			}

			this.popplerPath = popplerPath;
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Converts PDF to HTML.
	 * If outputFile is not specified then Poppler will use the directory and name
	 * of the original file and append '-html' to the end of the filename.
	 * @param {Object} options
	 * @param {String} file
	 * @returns {Promise}
	 */
	pdfToHtml(options, file) {
		return new Promise((resolve, reject) => {
			const acceptedOptions = {
				complexOutput: { arg: '-c', type: 'boolean' },
				exchangePdfLinks: { arg: '-p', type: 'boolean' },
				extractHidden: { arg: '', type: 'boolean' },
				firstPageToPrint: { arg: '-f', type: 'number' },
				fontFullName: { arg: '-fontfullname', type: 'boolean' },
				ignoreImages: { arg: '-i', type: 'boolean' },
				imageFormat: { arg: '-fmt', type: 'number' },
				lastPageToPrint: { arg: '-l', type: 'number' },
				noDrm: { arg: '-nodrm', type: 'boolean' },
				noFrames: { arg: '-noframes', type: 'boolean' },
				noMergeParagraph: { arg: '-nomerge', type: 'number' },
				noRoundedCoordinates: { arg: '-noRoundedCoordinates' },
				outputEncoding: { arg: '-enc', type: 'string' },
				ownerPassword: { arg: '', type: 'string' },
				printVersionInfo: { arg: '-v', type: 'boolean' },
				quiet: { arg: '-q', type: 'boolean' },
				singlePage: { arg: '-s', type: 'boolean' },
				stdout: { arg: '-stdout', type: 'boolean' },
				userPassword: { arg: '', type: 'string' },
				wordBreakThreshold: { arg: '-wb', type: 'number' },
				xmlOutput: { arg: '-xml', type: 'boolean' },
				zoom: { arg: '-zoom', type: 'number' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
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
	 * @param {Object=} options
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
	 * @param {Number=} options.firstPagetoConvert - Specifies the first page to convert.
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
	 * specified in the PDF file.  This option disables cropping (PS,PDF,SVG only).
	 * @param {Boolean=} options.noShrink - Don't scale PDF pages which are larger than the paper
	 * (PS,PDF,SVG only). By default, pages larger than the paper are shrunk to fit.
	 * @param {Boolean=} options.oddPagesOnly - Generates only the odd numbered pages.
	 * @param {Boolean=} options.originalPageSizes - Set the paper size of each page to match
	 * the size specified in the PDF file.
	 * @param {String=} options.ownerPassword - Specify the owner password for the PDF file.
	 * Providing this will bypass all security restrictions.
	 * @param {Number=} options.paperHeight - Set the paper height, in points (PS,PDF,SVG only).
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
	 * @param {Boolean=} options.tiffFile - Generates a TIFF file(s).
	 * @param {Boolean=} options.transparentPageColor - Use a transparent page color
	 * instead of white (PNG and TIFF only).
	 * @param {String=} options.userPassword - Specify the user password for the PDF file.
	 * @param {String} file
	 * @param {String=} outputFile
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
				firstPagetoConvert: { arg: '-f', type: 'number' },
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
				ownerPassword: { arg: '', type: 'string' },
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
				tiffFile: { arg: '-tiff', type: 'boolean' },
				transparentPageColor: { arg: '-transp', type: 'boolean' },
				userPassword: { arg: '', type: 'string' }
			};

			// Build array of args based on options passed
			const args = [];

			/**
			 * Check each option provided is valid and of the correct type,
			 * before adding it to argument list.
			 */
			if (options) {
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
}

module.exports = {
	Poppler
};
