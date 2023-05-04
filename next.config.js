/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
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
