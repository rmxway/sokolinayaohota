import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	staticDirs: ['../public'],
	typescript: {
		check: true,
		reactDocgen: 'react-docgen-typescript',
	},
	framework: '@storybook/nextjs',
	core: {
		disableTelemetry: true,
	},
	docs: {
		autodocs: 'tag',
	},
};

export default config;
