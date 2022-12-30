const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].jsx",
  },
  devServer: {
    port: 3000,
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin("./src/images/logo/logo.png"),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(svg|png|jpg|jpeg|JPG)$/, use: ["file-loader"] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};
