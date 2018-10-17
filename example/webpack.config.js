const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: { rules: [{ test: /\.tsx?$/, use: "ts-loader" }] },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
};
