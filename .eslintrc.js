"use strict";

module.exports = {
	env: {
		es2023: true,
		node: true,
	},
	extends: [
		"airbnb-base",
		"plugin:@eslint-community/eslint-comments/recommended",
		"plugin:jsdoc/recommended",
		"plugin:promise/recommended",
		"plugin:regexp/recommended",
		"plugin:security/recommended-legacy",
		"prettier",
	],
	overrides: [
		{
			extends: ["plugin:jest/recommended", "plugin:jest/style"],
			files: ["src/**/*.test.js"],
			plugins: ["jest"],
			rules: {
				"jest/no-duplicate-hooks": "error",
				"jest/no-test-return-statement": "error",
				"jest/prefer-comparison-matcher": "error",
				"jest/prefer-each": "warn",
				"jest/prefer-equality-matcher": "error",
				"jest/prefer-expect-resolves": "error",
				"jest/prefer-hooks-in-order": "error",
				"jest/prefer-hooks-on-top": "error",
				"jest/prefer-mock-promise-shorthand": "error",
				"jest/prefer-spy-on": "error",
				"jest/require-top-level-describe": "error",
			},
		},
	],
	parserOptions: {
		ecmaVersion: 2023,
		// Explicitly tell ESLint to parse JavaScript as CommonJS, as airbnb-base sets this to "modules" for ECMAScript
		sourceType: "script",
	},
	plugins: ["import", "jsdoc", "promise", "regexp", "security"],
	root: true,
	rules: {
		"@eslint-community/eslint-comments/disable-enable-pair": "off",
		"@eslint-community/eslint-comments/no-unused-disable": "error",
		"@eslint-community/eslint-comments/require-description": "error",
		"import/no-extraneous-dependencies": "error",
		"jsdoc/check-syntax": "error",
		"jsdoc/require-description-complete-sentence": "error",
		"jsdoc/require-hyphen-before-param-description": "error",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"prefer-destructuring": ["error", { object: true, array: false }],
		"promise/prefer-await-to-callbacks": "warn",
		"promise/prefer-await-to-then": "warn",
		"security/detect-object-injection": "off",
		strict: ["error", "global"],
	},
};
