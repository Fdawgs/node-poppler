/* eslint-disable security/detect-object-injection */
/* eslint-disable security-node/detect-crlf */
const checker = require("license-checker");
const copyLeftLicenses = require("spdx-copyleft");
const { promisify } = require("util");

const init = promisify(checker.init);
const path = require("upath");

/**
 * @author Frazer Smith
 * @description Checks licenses of all direct production dependencies to
 * ensure they are not copyleft.
 */
async function checkLicenses() {
	console.log("Checking licenses of direct production dependencies...");

	/**
	 * List of deprecated copyleft license identifiers
	 * @see https://spdx.org/licenses/
	 */
	const deprecatedLicenseList = [
		"AGPL-1.0",
		"AGPL-3.0",
		"GFDL-1.1",
		"GFDL-1.2",
		"GFDL-1.3",
		"GPL-1.0",
		"GPL-1.0+",
		"GPL-2.0",
		"GPL-2.0+",
		"GPL-2.0-with-autoconf-exception",
		"GPL-2.0-with-bison-exception",
		"GPL-2.0-with-classpath-exception",
		"GPL-2.0-with-font-exception",
		"GPL-2.0-with-GCC-exception",
		"GPL-3.0",
		"GPL-3.0+",
		"GPL-3.0-with-autoconf-exception",
		"GPL-3.0-with-GCC-exception",
		"LGPL-2.0",
		"LGPL-2.0+",
		"LGPL-2.1",
		"LGPL-2.1+",
		"LGPL-3.0",
		"LGPL-3.0+",
	];

	// merge copyleft licenses with deprecated licenses list
	copyLeftLicenses.push(...deprecatedLicenseList);

	const licenses = await init({
		direct: true,
		production: true,
		start: path.joinSafe(__dirname, ".."),
	});

	const copyLeftLicensesList = Object.keys(licenses).filter((license) =>
		copyLeftLicenses.includes(licenses[license].licenses)
	);

	if (copyLeftLicensesList.length > 0) {
		console.log(
			`The following dependencies are using copyleft licenses: ${copyLeftLicensesList.join(
				", "
			)}`
		);
		process.exit(1);
	}

	console.log("No copyleft licenses found.");
	process.exit(0);
}

checkLicenses();
