module.exports = function override(config, env) {
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        default: false
      },
    },
  };
  config.output = {
    ...config.output,
    filename: "static/js/shopping-cart.module.js",
    // chunkFilename: "static/js/shopping-cart.module.js",
  };

  return config;
};