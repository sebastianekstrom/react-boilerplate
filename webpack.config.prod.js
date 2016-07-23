var webpack = require('webpack');
var HtmlWebpackPlugin = require ('html-webpack-plugin');
var config = require ("./webpack.config");

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': "'production'"
    }
  }),
  new HtmlWebpackPlugin({
    template: 'app/index.html'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
];

config.debug = false;

config.entry = {
  app: ["./app/bootstrap"]
};

module.exports = config;
