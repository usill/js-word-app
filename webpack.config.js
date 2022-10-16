const path = require('path')
const srcPath = path.resolve(__dirname, './src/');
const distPath = path.resolve(__dirname, './dist/');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(srcPath, './index.js'),
  output: {
    filename: "[name].js",
    path: distPath,
    publicPath: "/",
  },
  devServer: {
    compress: true,
    hot: true,
    port: 8080,
    static: {
      directory: srcPath,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, 'index.html'),
      minify: false,
    }),
    new MiniCssExtractPlugin(),
    new CleanPlugin.CleanWebpackPlugin(),
  ]
}