const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@context': path.resolve(__dirname, 'src/context'),
		},
	},
	devServer: {
		static: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: require.resolve('babel-loader'),
			},
			{
				test: /\.scss$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: 'file-loader',
			},
		],
	},
};
