export default {
	moduleFileExtensions: ['js'],
	modulePaths: ['<rootDir>/src'],
	verbose: true,
	coverageDirectory: 'coverage',
	testMatch: ['<rootDir>/tests/*.test.js'],
	rootDir: '../',
	transform: {},
	testEnvironment: 'jsdom',
	resetModules: true,
	resetMocks: true,
	clearMocks: true
}
