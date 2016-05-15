'use strict';

const webpack = require('webpack');

module.exports = {
  entry: {

  },
  output: {

  },
  devServer: {

  },
  module: {
    preLoaders: [

    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
