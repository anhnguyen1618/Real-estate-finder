const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack-loader');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
module.exports = {
  module: {
    loaders: loaders
  },
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.build,
    port: 8080,
    inline: true,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: {
      index: 'index.html'
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://18489496.ngrok.io',
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '^/api': 'http://18489496.ngrok.io'
    //     }
    //   }
    // },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
};
