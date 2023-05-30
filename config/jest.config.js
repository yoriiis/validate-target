export default {
	moduleFileExtensions: ['js', 'ts'],
	extensionsToTreatAsEsm: ['.ts'],
	modulePaths: ['<rootDir>/src'],
	verbose: true,
	coverageDirectory: 'coverage',
	testMatch: ['<rootDir>/tests/*.test.js'],
	rootDir: '../',
	transform: {
		'\\.(js|ts)$': ['ts-jest', { configFile: './config/babel.config.js', useESM: true }]
	},
	testEnvironment: 'jsdom',
	resetModules: true,
	resetMocks: true,
	clearMocks: true
}
