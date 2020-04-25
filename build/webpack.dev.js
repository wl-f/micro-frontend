const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const rootDir = path.resolve(__dirname, "../");
module.exports = {
  entry: path.resolve(rootDir, "src", "index.js"),
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 5000,
    open: false,
    hot: false,
    disableHostCheck: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host:'0.0.0.0',
    historyApiFallback: true

  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(rootDir, "src")],
        loader: "babel-loader?cacheDirectory",
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              sourceMap: true,
            },
          }
        ]
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public", "index.html"),
      filename: "index.html",
    })
  ]
};
