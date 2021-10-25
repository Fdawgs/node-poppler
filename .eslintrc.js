module.exports = {
	env: {
		es2017: true,
		node: true,
	},
	extends: [
		"airbnb-base",
		"plugin:promise/recommended",
		"plugin:jest/recommended",
		"plugin:jsdoc/recommended",
		"plugin:security/recommended",
		"plugin:security-node/recommended",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: 2019,
	},
	plugins: [
		"import",
		"jest",
		"jsdoc",
		"promise",
		"security",
		"security-node",
	],
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
		"jsdoc/tag-lines": "off",
		"prefer-destructuring": "off",
		"promise/prefer-await-to-callbacks": "warn",
		"promise/prefer-await-to-then": "warn",
	},
};
