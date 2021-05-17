const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const ScriptExtPlugin = require("script-ext-html-webpack-plugin");
const { AngularWebpackPlugin } = require("@ngtools/webpack");
const path = require("path");

module.exports = function () {
  return {
    entry: "./src/main.ts",
    output: {
      path: __dirname + "/dist",
      filename: "app.js",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [{ test: /\.ts$/, loader: "@ngtools/webpack" }],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: "src/assets", to: "assets" }],
      }),
      new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        output: __dirname + "/dist",
        inject: "head",
      }),
      // // commented for expriment :start
      // new ScriptExtPlugin({
      //   defaultAttribute: "defer",
      // }),
      // // commented for expriment :end
      new AngularWebpackPlugin({
        tsConfigPath: "./tsconfig.json",
        entryModule: path.join(__dirname, "src/app/app.module#AppModule"),
        sourceMap: true,
      }),
    ],
  };
};
