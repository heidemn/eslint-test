module.exports = {
	extends: [
		"eslint:recommended",
        "plugin:node/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	parserOptions: {
		project: './tsconfig.json'
	},
	rules: {
		"node/no-unsupported-features/es-syntax": "off"
		//"no-void": "off", // needed for airbnb + no-floating-promises + void IIFE
		//"@typescript-eslint/no-floating-promises": "error"
	}
}
