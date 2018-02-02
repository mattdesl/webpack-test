const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build',
  },
  stats: "minimal",
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    stats: 'minimal',
  }
};

module.exports = webpackConfig;
