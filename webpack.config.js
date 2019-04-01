const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: [ "css-loader", "sass-loader" ]
        })
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/star-wars-api-react-redux/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
