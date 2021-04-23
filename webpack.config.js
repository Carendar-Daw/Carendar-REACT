/*eslint-disable*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@Components': path.resolve(__dirname, './src/components/'),
      '@Landing': path.resolve(__dirname, './src/components/Landing/'),
      '@Assets': path.resolve(__dirname, './public/assets/'),
      '@Commons': path.resolve(__dirname, './src/commons'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/assets/images/logos/logo-carendar.ico",
    }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|jpeg|gif|png|mp4)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};