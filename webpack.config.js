var path = require('path');
var webpack = require('webpack');
var autoprefixer = require ('autoprefixer');
var flexbugs = require ('postcss-flexbugs-fixes');
var HtmlWebpackPlugin = require ('html-webpack-plugin')
var autoprefixerBrowsers = [
  'last 2 versions',
  'Android 4',
  'iOS 8',
  'ie 10',
  'ie_mob 10'
]

module.exports = {
  devtool: 'eval',
  debug: true,

  entry: {
    app: [
      "webpack-dev-server/client?http://0.0.0.0:9000",
      "webpack/hot/only-dev-server",
      "./app/bootstrap"
    ]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].js"
  },

  resolveLoader: {
    moduleDirectories: ["node_modules"],
    fallback: path.join(__dirname, "node_modules")
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],

  postcss: [
    flexbugs,
    autoprefixer({browsers: autoprefixerBrowsers}),
  ],

  resolve: {
    moduleDirectories: ["node_modules"],
    fallback: path.join(__dirname, "node_modules"),
    extensions: ['', '.jsx', '.js', '.json', '.coffee', '.cjsx', '.scss', '.css'],
    alias: {
      'app': path.join(__dirname, 'app/')
    }
  },

  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel', 'eslint-loader'],
      include: path.join(__dirname, 'app')
    },
    {test: /\.svg/, loaders: ["url-loader?mimetype=image/svg+xml"]},
    {test: /\.png/, loaders: ["url-loader?mimetype=image/png"]},
    {test: /\.scss$/, loaders: [
      "style", "css", "postcss-loader", "sass?includePaths[]=#{bourbon.includePaths}"]}
    ]
  },

  devServer: {
    contentBase: "./build",
    port: 9000,
    host: "0.0.0.0",
    noInfo: true,
    hot: true,
    inline: true
  }

};
