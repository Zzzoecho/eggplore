const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除打包目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// css 插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodMode = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: './website/index.js',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@packages': path.resolve(__dirname, 'packages'),
      '@assets': path.resolve(__dirname, 'packages/assets'),
      '@website': path.resolve(__dirname, './website'),
      '@views': path.resolve(__dirname, './website/views'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|mp4)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:8].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // 只在生产环境下使用 css 提取，开发环境下热重载不能提取 css 文件
          prodMode ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "@packages/assets/styles/main.scss";',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
  plugins: [
    // 必须
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    port: 2333,
    contentBase: '../dist',
  },
  watchOptions: {
    aggregateTimeout: 1500,
    ignored: /node_modules/,
  },
};
