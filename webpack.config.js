const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@Components': path.resolve(__dirname, './src/components/'),
      '@Landing': path.resolve(__dirname, './src/components/Landing/'),
      '@Assets': path.resolve(__dirname, './public/assets/'),

    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
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
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader?name=[name]-[sha512:hash:base64:7].[ext]',
      },
      // This is required for font-awesome's font files
      {
        test: /\.(svg|ttf|woff2?|eot)(\?.*)?$/,
        loader: 'file-loader?name=[name]-[sha512:hash:base64:7].[ext]',
      },
      // For video
      {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader?name=[name]-[sha512:hash:base64:7].[ext]&mimetype=video/mp4',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};