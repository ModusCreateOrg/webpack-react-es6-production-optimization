const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  // Step 1: Source Maps
  // devtool: 'cheap-module-source-map',

  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  // Step 2: Node environment
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      }
    ]
  }
};
