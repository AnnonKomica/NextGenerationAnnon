/* eslint-disable */
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        "./src/index.js"
    ],
    output: {
        path: path.join(__dirname, "public", "javascripts"),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                loader: 'react-hot',
                exclude: /node_modules/
            },
            {
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"],
                    plugins: ["transform-flow-strip-types"],
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
    },
};
