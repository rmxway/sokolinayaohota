import { defineConfig } from 'vitest/config';
import { reactRouter } from '@react-router/dev/vite';
import svgr from 'vite-plugin-svgr';
import netlifyReactRouter from '@netlify/vite-plugin-react-router';
import path from 'path';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig(({ mode }) => ({
	plugins: [
		mode === 'test' || isStorybook ? [] : reactRouter(),
		svgr(),
		netlifyReactRouter(),
	],
	resolve: {
		tsconfigPaths: true,
		alias: {
			'@': path.resolve(import.meta.dirname, './'),
		},
	},
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
	// build: {
	// 	rolldownOptions: {
	// 		output: {
	// 			codeSplitting: {
	// 				maxSize: 1000000,
	// 				groups: [
	// 					{
	// 						name: 'vendor',
	// 						test: '/node_modules/',
	// 					},
	// 				],
	// 			},
	// 		},
	// 	},
	// },
}));
