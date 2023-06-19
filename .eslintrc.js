module.exports = {
	env: {
		es2017: true,
		node: true,
	},
	extends: [
		"airbnb-base",
		"plugin:promise/recommended",
		"plugin:jsdoc/recommended",
		"plugin:security/recommended",
		"plugin:security-node/recommended",
		"prettier",
	],
	overrides: [
		{
			extends: ["plugin:jest/recommended", "plugin:jest/style"],
			files: ["src/**/*.test.js"],
			plugins: ["jest"],
		},
	],
	parserOptions: {
		ecmaVersion: 2019,
	},
	plugins: ["import", "jsdoc", "promise", "security", "security-node"],
	root: true,
	rules: {
		"import/no-extraneous-dependencies": "error",
		"no-console": "off",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"prefer-destructuring": ["error", { object: true, array: false }],
		"promise/prefer-await-to-callbacks": "warn",
		"promise/prefer-await-to-then": "warn",
		"security/detect-object-injection": "off",
	},
};
