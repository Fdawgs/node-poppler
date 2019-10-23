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
					popplerPath = __dirname;
					break;

				default:
					console.error(`${platform} is NOT supported.`);
					process.exit(1);
					break;
			}

			this.popplerPath = popplerPath;
		}
	}

	pdfToHtml(file, options) {
		return new Promise((resolve, reject) => {
			const args = [];

			// Build array of arguments based on options passed
			if (options.quiet) {
				args.push('-q');
			}
			if (options.version) {
				args.push('-v');
			}

			args.push(file);

			console.log(path.join(this.popplerPath, 'pdftohtml'));

			execFile(path.join(this.popplerPath, 'pdftohtml'), args, (err, stdout) => {
				if (err) {
					reject(err);
				} else {
					resolve(stdout);
				}
			});
		});
	}
}
};

module.exports = {
	Poppler
};
