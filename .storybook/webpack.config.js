const path = require(`path`);

module.exports = ({ config }) => {
	const rule = config.module.rules.find(
		(r) => r.test && r.test.toString().includes('svg') && r.use
	);

	rule.test =
		/\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

	config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});

	config.module.rules.unshift({
		test: /\.js$/,
		use: [
			{
				loader: require.resolve('babel-loader'),
				options: {
					presets: ['react-app'],
				},
			},
		],
		include: [
			path.join(path.dirname(__dirname), 'node_modules/gatsby/cache-dir'),
		],
	});

	return config;
};
