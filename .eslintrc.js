module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
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

	extends: 'standard',

	rules: {
		indent: ['error', 'tab', { ignoredNodes: ['TemplateLiteral > *'] }],
		'no-tabs': 0,
		'no-console': 0,
		'semi': [1, 'always']
	},

	globals: {
		document: false,
		window: false
	}
}
