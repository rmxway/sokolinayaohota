import { defineConfig } from 'vitest/config';
import { reactRouter } from '@react-router/dev/vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig(({ mode }) => ({
	plugins: [mode === 'test' || isStorybook ? [] : reactRouter(), svgr()],
	resolve: {
		tsconfigPaths: true,
		alias: {
			'@': path.resolve(import.meta.dirname, './'),
		},
	},
	server: {
		host: true,
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
					groups: [
						{
							name: 'framer',
							test: /node_modules[\\/]framer-motion/,
							priority: 30,
						},
						{
							name: 'react',
							test: /node_modules[\\/](react|react-dom)[\\/]/,
							priority: 25,
						},
						{
							name: 'react-router',
							test: /node_modules[\\/](react-router)[\\/]/,
							priority: 25,
						},
						{
							name: 'vendor',
							test: /node_modules/,
							priority: 10,
						},
					],
				},
			},
		},
	},
}));
