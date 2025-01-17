// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"expo",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-native/all",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "react-native", "@typescript-eslint"],
	rules: {
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/no-require-imports": "off",

		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],

		"react-native/no-inline-styles": "off",
		"react-native/no-color-literals": "off",
		"react-native/sort-styles": "off",

		"no-console": "warn",
		"no-debugger": "error",
		semi: ["error", "always"],
		// "sort-keys": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			alias: {
				map: [
					["@", "./components"], //ścieżka do katalogu źródłowego
				],
				extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
			},
		},
	},
	ignorePatterns: ["/dist/*"],
};
