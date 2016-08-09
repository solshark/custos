const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const APP = __dirname + '/app';
const BUILD = __dirname + '/dist';


module.exports = {
  entry: {
    app: APP,
  },
  output: {
    path: BUILD,
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP,
      }
    ],
  },
  plugins: [
    new CleanPlugin([BUILD]),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
