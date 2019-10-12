const os = require('os');
const path = require('path');

const platform = os.platform();
let popplerPath;

// Build path to Poppler binaries based on OS
switch (platform) {
	// Windows OS
	case 'win32':
		popplerPath = path.join(
			__dirname,
			'lib',
			'win',
			'poppler-0.68.0_x86',
			'bin'
		);
		console.log(popplerPath);
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

module.exports = {
	popplerPath
};
