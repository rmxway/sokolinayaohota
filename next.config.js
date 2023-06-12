/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'sokolinayaohota.ru',
			},
		],
	},
	compiler: {
		styledComponents: true,
	},
	output: 'standalone',
	webpack: (config) => {
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
		};

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
