const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
};
