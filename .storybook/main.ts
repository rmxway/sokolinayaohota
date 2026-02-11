import path from 'node:path';

import type { StorybookConfig } from '@storybook/react-webpack5';

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
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	webpackFinal: async (webpackConfig) => {
		const basePath = process.env.BASE_PATH ?? '/';
		const isDeployBuild =
			process.env.NODE_ENV !== 'development' && basePath !== '/';
		if (isDeployBuild) {
			webpackConfig.output = webpackConfig.output ?? {};
			webpackConfig.output.publicPath = './';
		}

		// Меньшие чанки — укладываемся в лимит 244 KiB и улучшаем кэширование
		webpackConfig.optimization = {
			...webpackConfig.optimization,
			splitChunks: {
				...webpackConfig.optimization?.splitChunks,
				chunks: 'all',
				maxSize: 244 * 1024, // 244 KiB — рекомендуемый лимит Storybook
				cacheGroups: {
					...(
						webpackConfig.optimization?.splitChunks as {
							cacheGroups?: object;
						}
					)?.cacheGroups,
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor',
					},
				},
			},
		};

		// Отключаем предупреждения о размере: отдельные библиотеки не делятся, gzip на сервере уменьшает трафик
		webpackConfig.performance = { hints: false };

		if (!webpackConfig.module) {
			webpackConfig.module = { rules: [] };
		}

		webpackConfig.module.rules = webpackConfig.module.rules || [];

		// Отключаем дефолтную обработку SVG в Storybook
		const fileLoaderRule = webpackConfig.module.rules.find((rule) => {
			if (typeof rule !== 'object' || !rule) return false;
			if ('test' in rule && rule.test instanceof RegExp) {
				return rule.test.test('.svg');
			}
			return false;
		});

		if (fileLoaderRule && typeof fileLoaderRule === 'object') {
			if ('exclude' in fileLoaderRule && fileLoaderRule.exclude) {
				if (Array.isArray(fileLoaderRule.exclude)) {
					fileLoaderRule.exclude.push(/\.svg$/);
				} else {
					fileLoaderRule.exclude = [fileLoaderRule.exclude, /\.svg$/];
				}
			} else {
				fileLoaderRule.exclude = /\.svg$/;
			}
		}

		// SVG как React-компоненты (как в Next.js с @svgr/webpack)
		webpackConfig.module.rules.push({
			test: /\.svg$/,
			use: [require.resolve('@svgr/webpack')],
		});

		// TS/JS
		webpackConfig.module.rules.push({
			test: /\.[jt]sx?$/,
			exclude: /node_modules/,
			use: {
				loader: require.resolve('babel-loader'),
				options: {
					compact: true,
					presets: [
						require.resolve('@babel/preset-env'),
						[
							require.resolve('@babel/preset-react'),
							{ runtime: 'automatic' },
						],
						require.resolve('@babel/preset-typescript'),
					],
				},
			},
		});

		// SCSS (глобальные шрифты и иконочный шрифт)
		webpackConfig.module.rules.push({
			test: /\.s[ac]ss$/i,
			use: [
				require.resolve('style-loader'),
				{
					loader: require.resolve('css-loader'),
					options: {
						importLoaders: 1,
					},
				},
				{
					loader: require.resolve('sass-loader'),
					options: {
						implementation: require.resolve('sass'),
					},
				},
			],
		});

		return {
			...webpackConfig,
			resolve: {
				...webpackConfig.resolve,
				alias: {
					...webpackConfig.resolve?.alias,
					'next/font/google': path.resolve(
						__dirname,
						'next-font-google-mock.ts',
					),
					'@': path.resolve(__dirname, '..'),
					'@/app': path.resolve(__dirname, '../app'),
					'@/public': path.resolve(__dirname, '../public'),
					'@/components': path.resolve(__dirname, '../components'),
					'@/theme': path.resolve(__dirname, '../theme'),
					'@/lib': path.resolve(__dirname, '../lib'),
					'@/mock': path.resolve(__dirname, '../mock'),
				},
			},
		};
	},
	core: {
		disableTelemetry: true,
	},
};

export default config;
