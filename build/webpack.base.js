const path = require('path');
const { VueLoaderPlugin } = require('vue-loader'); // 对于 Vue 3.x
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 注意这一行的变化

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048,
                    esModule: false // 避免webpack将图片文件打包为ES模块
                },
                type: 'javascript/auto'
            },
            {
                test: /\.styl(us)?$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }
        ),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js', // Vue 3.x 的打包文件
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'images': path.resolve(__dirname, '../src/assets/images')
        }
    },

};
