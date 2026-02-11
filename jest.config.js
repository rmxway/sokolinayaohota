const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/*.(test|spec).[jt]s?(x)'],
	collectCoverageFrom: [
		'components/**/*.{ts,tsx}',
		'services/**/*.{ts,tsx}',
		'hooks.ts',
		'!**/*.stories.{ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!**/.next/**',
	],
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
};

module.exports = createJestConfig(customJestConfig);
