var path = require('path');
var webpack = require('webpack');

var config = {
	entry: path.resolve(__dirname, 'src', 'Entry2.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'demo2.js',
		publicPath: 'build/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'LAZY_LOAD': true
			}
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			include: [
				path.resolve(__dirname, 'src'),
			],
			exclude: path.resolve(__dirname, 'node_modules'),
			loaders: ['babel-loader']
		}]
	}
};

module.exports = config;