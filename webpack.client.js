const path = require("path");
const merge = require("webpack-merge");

const configBase = require("./webpack.base");

const config = {
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = merge(configBase, config);
