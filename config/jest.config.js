module.exports = {
	moduleFileExtensions: ['js'],
	modulePaths: ['<rootDir>/src'],
	verbose: true,
	coverageDirectory: 'coverage',
	testMatch: ['<rootDir>/tests/*.test.js'],
	rootDir: '../',
	transform: {
		'\\.[jt]sx?$': ['babel-jest', { configFile: './config/babel.config.js' }]
	},
	testEnvironment: 'jsdom',
	resetModules: true,
	resetMocks: true,
	clearMocks: true
}
