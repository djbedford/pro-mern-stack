const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: ['./server/index.js', './node_modules/webpack/hot/poll?1000'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  externals: [/^[a-z]/],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015-node'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-node'],
        },
      },
    ],
  },
  devtool: 'source-map',
};
