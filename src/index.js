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
				imageFormat: { arg: '-fmt', type: 'string' },
				lastPageToPrint: { arg: '-l', type: 'number' },
				noDrm: { arg: '-nodrm', type: 'boolean' },
				noFrames: { arg: '-noframes', type: 'boolean' },
				noMergeParagraph: { arg: '-nomerge', type: 'boolean' },
				noRoundedCoordinates: { arg: '-noRoundedCoordinates', type: 'boolean' },
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
			const acceptedOptions = {};

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
