/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	output: 'standalone',
	webpack: (config) => {
		config.resolve.fallback = {
			...config.resolve.fallback, // if you miss it, all the other options in fallback, specified by next.js will be dropped. Doesn't make much sense, but how it is
			fs: false,
		};

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
