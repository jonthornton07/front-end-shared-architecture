const path = require("path");

module.exports = {
  entry: "./index.ts",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx)?$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
