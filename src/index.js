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
	 * @description Converts PDF to PNG/JPEG/TIFF/PDF/PS/EPS/SVG
	 * or sends to system printer (Windows only).
	 * @param {Object} options
	 * @param {String} file
	 * @param {String} outputFile
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
				firstPageToPrint: { arg: '-f', type: 'number' },
				grayscaleFile: { arg: '-gray', type: 'boolean' },
				iccFile: { arg: '-icc', type: 'string' },
				jpegFile: { arg: '-jpeg', type: 'boolean' },
				jpegOptions: { arg: '-jpegopt', type: 'string' },
				lastPageToPrint: { arg: '-l', type: 'number' },
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
				print: { arg: '-print', type: 'boolean' },
				printVersionInfo: { arg: '-v', type: 'boolean' },
				printdlg: { arg: '-printdlg', type: 'boolean' },
				printer: { arg: '-printer', type: 'string' },
				printerOptions: { arg: '-printopt', type: 'string' },
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
				setupdlg: { arg: '-setupdlg', type: 'boolean' },
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
