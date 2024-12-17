const { webpackConfig, merge } = require("shakapacker");
const webpack = require("webpack");

const customizeWebpackDefaultRules = require("./helpers/customize-default-rules");
const resolve = require("./resolve");
const rules = require("./rules");

const commonOptions = {
  infrastructureLogging: {
    level: "warn",
  },
  resolve: {
    ...resolve, // retain any custom resolve configurations
    alias: {
      ...resolve.alias, // retain any custom aliases you might have
      process: require.resolve("process/browser"), // Ensure process is polyfilled
    },
    fallback: {
      ...resolve.fallback, // retain fallback configurations
      process: require.resolve("process/browser"), // Add process/browser fallback
      // Uncomment and add other necessary fallbacks if you face issues with other modules
      // fs: false,
      // path: require.resolve("path-browserify"),
      // stream: require.resolve("stream-browserify"),
    },
  },
  module: {
    rules,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser", // This provides process to the entire project
    }),
  ],
};

// This rule is causing issues to react-svg-loader
const defaultRules = {
  "asset/resource": {
    test: /\.(bmp|gif|jpe?g|png|tiff|ico|avif|webp|eot|otf|ttf|woff|woff2)$/,
  },
};

const customWebpackConfig = customizeWebpackDefaultRules(
  webpackConfig,
  defaultRules
);

const commonWebpackConfig = () => merge({}, customWebpackConfig, commonOptions);
module.exports = commonWebpackConfig;
