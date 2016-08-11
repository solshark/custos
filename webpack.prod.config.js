const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const APP = __dirname + '/app';
const BUILD = __dirname + '/dist';


module.exports = {
  entry: {
    app: ['isomorphic-fetch', APP],
  },
  output: {
    path: BUILD,
    filename: 'index.js',
    library: 'custos',
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
      },
      { test: /\.json$/, loader: 'json' },
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
