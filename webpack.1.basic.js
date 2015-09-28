var path = require('path');
var webpack = require('webpack');

var config = {
	entry: path.resolve(__dirname, 'src', 'Entry1.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'demo1.js',
		publicPath: 'build/'
	},
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