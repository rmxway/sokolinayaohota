// @ts-check

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: process.env.NODE_ENV === 'production',
	images: {
		unoptimized: true,
		qualities: [5, 20, 50, 70, 75],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	compiler: {
		styledComponents: true,
	},
	experimental: {
		turbopackFileSystemCacheForDev: false,
	},
	turbopack: {},
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

module.exports = nextConfig;
