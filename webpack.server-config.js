const path = require('path');

module.exports = {
  target: 'node',
  entry: './server/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs',
  },
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
