const path = require("path");

const config = {
  entry: "./src/www.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // devtool: "source-map",
  target: "node",
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
      "@": path.resolve(__dirname, "/"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = config;
