"use strict";
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname,
	devtool: "sorce-map",
	entry: {
		app: "./src/js/main.js",
		vendor: ["react", 'react-dom', 'masonry-layout']
	},
	output: {
		publicPath: "/",
		path: "./app",
		filename: "[name].bundle.js",
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract(["css", "resolve-url", "sass?sourceMap"])
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: 'file',
				query: {
					name: "[path][name].[ext]"
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin("build.css"),
		new webpack.optimize.CommonsChunkPlugin({
			names: ["app", "vendor"],
			minChunks: Infinity
		})
	],

	devServer: {
		contentBase: "./app",
		inline: true,
		host: "localhost",
		port: 3002
	}
}
