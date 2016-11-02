"use strict";
const webpack = require("webpack");
const path = require("path");

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
				loaders: ["style", "css", "resolve-url", "sass?sourceMap"]
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

	devServer: {
		contentBase: "./app",
		inline: true,
		host: "localhost",
		port: 3002
	},

	devtool: "sorce-map"
}
