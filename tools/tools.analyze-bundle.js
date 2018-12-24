const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('../webpack.config.prod');

config.plugins.push(new BundleAnalyzerPlugin());

const compiler = webpack(config);

compiler.run((error, stats) => {
  if (error) {
    throw new Error(error);
  }
  console.log(stats);
});
