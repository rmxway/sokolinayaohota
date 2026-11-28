import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import type { RolldownOptions } from 'vite/types/internal/rollupTypeCompat.js';

const config: StorybookConfig = {
	stories: ['../**/*.stories.@(ts|tsx)'],
	framework: '@storybook/react-vite',
	viteFinal: async (config) => {
		const merged = mergeConfig(config, {
			build: {
				chunkSizeWarningLimit: 1500,
				rolldownOptions: {
					output: {
						codeSplitting: {
							groups: [
								{
									name: 'framer',
									test: /node_modules[\\/]framer-motion/,
								},
								{
									name: 'react',
									test: /node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/,
								},
								{
									name: 'styled-components',
									test: /node_modules[\\/](styled-components)/,
								},
								{
									name: 'vendor',
									test: /node_modules/,
									maxSize: 400000,
								},
							],
						},
					},
					onLog(level, log, handler) {
						if (log.code === 'MODULE_LEVEL_DIRECTIVE') return;
						handler(level, log);

						if (level === 'warn') {
							handler('error', log);
						} else {
							handler(level, log);
						}
					},
				} as RolldownOptions,
			},
		});
		return merged;
	},
};

export default config;
