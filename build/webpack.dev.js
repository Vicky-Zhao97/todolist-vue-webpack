const path = require('path');
const baseConfig = require('./webpack.base.js');
const {merge }= require('webpack-merge')
const webpack = require('webpack');

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist')
        },
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};

module.exports = merge(baseConfig, devConfig);
