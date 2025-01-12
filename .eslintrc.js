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
		// Dodaj swoje własne reguły tutaj
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			alias: {
				map: [
					["@", "./app-example"], // Dostosuj ścieżkę do katalogu źródłowego
				],
				extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
			},
		},
	},
	ignorePatterns: ["/dist/*"],
};
