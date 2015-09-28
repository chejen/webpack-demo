var path = require('path');
var webpack = require('webpack');

var config = {
	entry: {
		demo1: path.resolve(__dirname, 'src', 'Entry1.js'),
		demo2: path.resolve(__dirname, 'src', 'Entry2.js')
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "[name].min.js",
		publicPath: 'build/'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("commons.min.js"),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
				'LAZY_LOAD': true
			}
		})
	],
	devtool: 'source-map',
	externals: {
		'react': 'React'
	},
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