const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { name } = require('../package.json').name;


const rootDir = path.resolve(__dirname, "../");
module.exports = {
  entry: path.resolve(rootDir, "src", "index.js"),
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: '8010',
    clientLogLevel: 'warning',
    disableHostCheck: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    overlay: { warnings: false, errors: true },
    host:'0.0.0.0'
  },
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${name}`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(rootDir, "src")],
        loader: "babel-loader?cacheDirectory",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              javascriptEnabled: true,
            }
          }
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|png|svg|jpg|gif|mp4|MP4)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(rootDir, "public", "index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ]
};
