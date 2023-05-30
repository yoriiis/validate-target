module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 6,
		ecmaFeatures: {
			impliedStrict: true,
			experimentalObjectRestSpread: true
		},
		sourceType: 'module'
	},

	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true
	},

	extends: ['standard', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],

	rules: {
		indent: ['error', 'tab', { ignoredNodes: ['TemplateLiteral *'], SwitchCase: 1 }],
		'no-tabs': 0,
		'space-before-function-paren': [
			'error',
			{ anonymous: 'always', named: 'never', asyncArrow: 'always' }
		],
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'linebreak-style': ['error', 'unix']
	},

	globals: {
		document: false,
		window: false
	}
}
