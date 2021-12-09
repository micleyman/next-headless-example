module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'plugin:react/recommended',
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	rules: {}
}
