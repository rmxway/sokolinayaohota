import { defineConfig } from 'vitest/config';
import { reactRouter } from '@react-router/dev/vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { baseName as base } from './services/constants.ts';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig(({ mode }) => ({
	plugins: [mode === 'test' || isStorybook ? [] : reactRouter(), svgr()],
	resolve: {
		tsconfigPaths: true,
		alias: {
			'@': path.resolve(import.meta.dirname, './'),
		},
	},
	base,
	server: {
		host: true,
		// proxy: {
		// 	'/api': 'https://your-api-server.com',
		// },
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./vitest.setup.ts'],
		include: ['**/*.(test|spec).[jt]s?(x)'],
		css: true,
	},
	build: {
		rolldownOptions: {
			output: {
				codeSplitting: {
					maxSize: 1000000,
					groups: [
						{
							name: 'vendor',
							test: '/node_modules/',
						},
					],
				},
			},
		},
	},
}));
