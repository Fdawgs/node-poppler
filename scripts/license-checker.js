/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const checker = require("license-checker");
const copyLeftLicenses = require("spdx-copyleft");
const { promisify } = require("util");

const init = promisify(checker.init);
const path = require("upath");

/**
 * @author Frazer Smith
 * @description Check licenses of all direct production dependencies to
 * ensure they are not copyleft.
 * @param {object} options - Options object.
 * @param {string} options.start - Path to start checking from.
 * @returns {Promise<object>} Promise resolving to object of licenses.
 */
async function checkLicenses(
	options = { start: path.joinSafe(__dirname, "..") }
) {
	console.log("Checking licenses of direct production dependencies...");

	const licenses = await init({
		direct: true,
		failOn: copyLeftLicenses.join(";"),
		production: true,
		start: options.start,
	});

	return licenses;
}

// If file called directly, then run function
/* istanbul ignore if */
if (require.main === module) {
	checkLicenses();
}

module.exports = checkLicenses;
