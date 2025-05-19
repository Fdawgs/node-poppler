import globals from "globals";
import { fileURLToPath, URL } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";

// Configs
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier/flat";

// Plugins
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import imp from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import promise from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const config = [
	// Include ignore file to prevent linting of files in .gitignore
	includeIgnoreFile(gitignorePath),
	eslint.configs.recommended,
	comments.recommended,
	jsdoc.configs["flat/recommended"],
	promise.configs["flat/recommended"],
	regexp.configs["flat/recommended"],
	security.configs.recommended,
	{
		files: ["**/*.js", "**/*.jsx"],
		languageOptions: {
			ecmaVersion: 2023,
			sourceType: "commonjs",
			globals: { ...globals.node },
		},
		plugins: { import: imp, jsdoc, n, regexp },
		rules: {
			// Standard rules
			"arrow-body-style": [
				"error",
				"as-needed",
				{
					requireReturnForObjectLiteral: false,
				},
			],
			"func-style": ["error", "declaration"],
			"no-console": "warn",
			"no-label-var": "error",
			"no-param-reassign": [
				"error",
				{
					props: true,
				},
			],
			"no-proto": "error",
			"no-return-assign": ["error", "always"],
			"no-script-url": "error",
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-shadow": "error",
			"no-throw-literal": "error",
			"no-undef-init": "error",
			"no-unused-expressions": [
				"error",
				{
					allowShortCircuit: false,
					allowTernary: false,
					allowTaggedTemplates: false,
				},
			],
			"no-use-before-define": [
				"error",
				{ functions: true, classes: true, variables: true },
			],
			"no-useless-computed-key": "error",
			"no-var": "error",
			"object-shorthand": [
				"error",
				"always",
				{
					ignoreConstructors: false,
					avoidQuotes: true,
				},
			],
			"prefer-arrow-callback": [
				"error",
				{
					allowNamedFunctions: false,
					allowUnboundThis: true,
				},
			],
			"prefer-const": [
				"error",
				{
					destructuring: "any",
					ignoreReadBeforeAssign: true,
				},
			],
			"prefer-destructuring": ["error", { object: true, array: false }],
			"prefer-promise-reject-errors": [
				"error",
				{ allowEmptyReject: true },
			],
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			radix: "error",
			strict: ["error", "global"],
			"vars-on-top": "error",
			// Comments rules
			"@eslint-community/eslint-comments/disable-enable-pair": "off",
			"@eslint-community/eslint-comments/no-unused-disable": "error",
			"@eslint-community/eslint-comments/require-description": "error",
			// Import rules
			"import/no-extraneous-dependencies": "error",
			// JSDoc rules
			"jsdoc/check-syntax": "error", // Error on Google Closure Compiler annotations as IntelliSense struggles with them
			"jsdoc/require-hyphen-before-param-description": "error",
			// Node rules
			"n/global-require": "error",
			"n/hashbang": "error",
			"n/no-deprecated-api": "error",
			"n/no-new-require": "error",
			"n/no-path-concat": "error",
			"n/no-unsupported-features/es-builtins": "error",
			"n/no-unsupported-features/es-syntax": "error",
			"n/no-unsupported-features/node-builtins": "error",
			"n/prefer-node-protocol": "error",
			// Promise rules
			"promise/prefer-await-to-callbacks": "warn",
			"promise/prefer-await-to-then": "warn",
			// RegExp rules
			"regexp/require-unicode-regexp": "error",
			// Security rules
			"security/detect-object-injection": "off",
		},
	},
	{
		files: ["scripts/**/*.js"],
		rules: {
			"no-console": "off",
		},
	},
	{
		files: ["**/*.test.js"],
		...jest.configs["flat/recommended"],
		...jest.configs["flat/style"],
		rules: {
			...jest.configs["flat/recommended"].rules,
			...jest.configs["flat/style"].rules,
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
	prettier,
];

export default config;
