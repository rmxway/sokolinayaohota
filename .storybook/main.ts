import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-styling',
	],
	staticDirs: ['../public'],
	typescript: {
		check: true,
		reactDocgen: 'react-docgen-typescript',
	},
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
	docs: {
		autodocs: 'tag',
	},
};

export default config;
