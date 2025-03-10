const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "os": require.resolve("os-browserify"),
    "path": require.resolve("path-browserify"),
    "buffer": require.resolve("buffer"),
    "process/browser": require.resolve("process/browser") // Correct process polyfill
  })
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser', // Correct process polyfill
      Buffer: ['buffer', 'Buffer']
    })
  ])
  return config;
}