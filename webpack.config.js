const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./client/Client.jsx'],
    vendor: [
      'react', 'react-dom', 'react-bootstrap',
      'isomorphic-fetch', 'react-router', 'babel-polyfill',
      'react-router-bootstrap',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  devServer: {
    port: 8000,
    contentBase: 'static',
    proxy: {
      '**': {
        target: 'http://localhost:3000',
      },
    },
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
