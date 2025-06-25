import { fileURLToPath, URL } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig } from "eslint/config";

// Configs
import fdawgs from "@fdawgs/eslint-config";

// Plugins
import jest from "eslint-plugin-jest";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const config = defineConfig([
	// Include ignore file to prevent linting of files in .gitignore
	includeIgnoreFile(gitignorePath),
	{
		files: ["**/*.js", "**/*.jsx"],
		extends: [fdawgs],
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
]);

export default config;
