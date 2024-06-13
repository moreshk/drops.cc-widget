const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolveTsconfigPathsToAlias = require("./resolve-tsconfig-path-to-webpack-alias");
const bundleOutputDir = "./";

module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: resolveTsconfigPathsToAlias(),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  output: {
    filename: "dropz-widget.js",
    path: path.resolve(bundleOutputDir),
  },
  devServer: {
    contentBase: bundleOutputDir,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
