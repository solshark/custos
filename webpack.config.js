const webpack = require('webpack');

const APP = __dirname + '/app';
const BUILD = __dirname + '/dist';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;


module.exports = {
  entry: {
    app: APP,
  },
  output: {
    path: BUILD,
    filename: '[name].js',
    publicPath: '/',
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
    ],
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'), // eslint-disable-line quote-props
      },
    }),
  ],
};
