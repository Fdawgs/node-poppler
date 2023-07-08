"use strict";

module.exports = {
	rules: {
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
			},
		],
		"no-console": "off",
	},
};
