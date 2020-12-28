module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"airbnb-base",
		"plugin:promise/recommended",
		"plugin:jest/recommended",
		"plugin:jsdoc/recommended",
		"plugin:security/recommended",
		"prettier",
	],
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	plugins: ["import", "jest", "jsdoc", "promise", "security"],
	root: true,
	rules: {
		"import/no-extraneous-dependencies": "error",
		"no-console": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
			},
		],
		"prefer-destructuring": "off",
		"promise/prefer-await-to-callbacks": "warn",
		"promise/prefer-await-to-then": "warn",
	},
};
