const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除打包目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// css 插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "@/assets/styles/variables.scss";'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 必须
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: 'css/[id].[hash].css'
        }),
        // new CleanWebpackPlugin(['dist/*'], {
        //     root: path.resolve(__dirname, '../')
        // }),
    ],
    devServer: {
        port: 2333,
        contentBase: '../dist'
    }
}