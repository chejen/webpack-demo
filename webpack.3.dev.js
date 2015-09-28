var path = require('path');
var webpack = require('webpack');

var config = {
	entry: {
		demo3: [
		//	'webpack-dev-server/client?http://localhost:8888',
			'webpack/hot/only-dev-server',
			path.resolve(__dirname, 'src', 'Entry3.js')
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "[name].js",
		publicPath: 'http://localhost:8888/build/'
	},/*
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],*/
	module: {
		loaders: [{
			test: /\.js$/,
			include: [
				path.resolve(__dirname, 'src'),
			],
			exclude: path.resolve(__dirname, 'node_modules'),
			loaders: ['react-hot', 'babel-loader']
		}]
	}
};

module.exports = config;