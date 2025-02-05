"use strict";

const { promisify } = require("node:util");
const { init } = require("license-checker");
/** @type {string[]} */
// @ts-ignore: module is a JSON file
const copyLeftLicenses = require("spdx-copyleft");
const { join } = require("node:path");

const check = promisify(init);

/**
 * @author Frazer Smith
 * @description Checks licenses of all direct production dependencies to
 * ensure they are not copyleft.
 */
async function checkLicenses() {
	console.log("Checking licenses of direct production dependencies...");

	/**
	 * List of deprecated copyleft license identifiers.
	 * @see {@link https://spdx.org/licenses/#deprecated | SPDX Deprecated License Identifiers}
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

	// Merge copyleft licenses with deprecated licenses list
	copyLeftLicenses.push(...deprecatedLicenseList);

	const licenses = await check({
		direct: true,
		production: true,
		start: join(__dirname, ".."),
	});

	const copyLeftLicensesList = Object.keys(licenses).filter((license) => {
		let lic = licenses[license].licenses;

		if (!lic) {
			console.error(
				`No license found for ${license}. Please check the package.json file.`
			);
			process.exit(1);
		}

		lic = Array.isArray(lic) ? lic : [lic];

		return lic.some((l) => copyLeftLicenses.includes(l));
	});

	if (copyLeftLicensesList.length > 0) {
		console.error(
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
