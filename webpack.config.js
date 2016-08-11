const webpack = require('webpack');

const APP = __dirname + '/app';
const BUILD = __dirname + '/dist';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
  entry: {
    app: ['isomorphic-fetch', APP],
  },
  output: {
    path: BUILD,
    filename: '[name].js',
    publicPath: '/',
  },
  externals: [
    {
      'isomorphic-fetch': {
        root: 'isomorphic-fetch',
        commonjs2: 'isomorphic-fetch',
        commonjs: 'isomorphic-fetch',
        amd: 'isomorphic-fetch'
      },
    },
  ],
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
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'), // eslint-disable-line quote-props
      },
    }),
  ],
};
