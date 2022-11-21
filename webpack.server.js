const path = require("path");
const merge = require("webpack-merge");

const configBase = require("./webpack.base");

const config = {
  target: "node",
  entry: "./src/app.js",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = merge(configBase, config);
