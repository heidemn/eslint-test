module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		'airbnb-base',
		'airbnb-typescript/base'
	],
	parserOptions: {
		project: './tsconfig.json'
	},
	rules: {
		"no-void": "off", // needed for airbnb + no-floating-promises + void IIFE
		"@typescript-eslint/no-floating-promises": "error"
	}
}
