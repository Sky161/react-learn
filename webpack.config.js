"use strict";
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: "./src/js/main.js",
	output: {
		publicPath: "/",
		path: "./app",
		filename: "bundle.js",
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
		new ExtractTextPlugin("build.css")
	],

	devServer: {
		contentBase: "./app",
		inline: true,
		host: "localhost",
		port: 3002
	},

	devtool: "sorce-map"
}
