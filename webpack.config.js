var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: "./app.js",
    },
    output: {
        path: "/react/dist",
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: "babel-loader",
        }, {
            test: /\.json$/,
            loader: "json",
        }, {
            test: /\.(eot|svg|ttf|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url!file?name=fontFile/[hash].[ext]",
        }, {
            test: /\.(woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url!file?name=woff/[hash].[ext]",
        }, {
            test: /\.(css|less)$/,
            loader: "style!css!less",
        }]
    },
}