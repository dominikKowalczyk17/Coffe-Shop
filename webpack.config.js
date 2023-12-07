const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env) => {
  const PACKAGE = require("./package.json");
  const NODE_ENV = (env && env.NODE_ENV) || "development";
  const isProd = NODE_ENV === "production";
  const WATCH_MODE = process.argv.indexOf("--watch") !== -1;
  const DEV_SERVER = process.argv[1].indexOf("webpack-dev-server") !== -1;

  // No longer using PORTAL for directory resolution
  const PORTAL_PATH = __dirname; // Directly pointing to the root directory

  const envToExport = {
    NODE_ENV: JSON.stringify(NODE_ENV),
    VERSION: JSON.stringify(PACKAGE.version),
  };

  const config = {
    mode: NODE_ENV,
    context: path.resolve(__dirname, "src"),
    entry: {
      app: ["./js/index.js"],
      style: ["./css/index.scss"],
    },
    output: {
      path: path.resolve(PORTAL_PATH, "dist"), // Output to 'dist' directory in the root
      filename: isProd ? "[name].[contenthash:5].js" : "[name].js",
      publicPath: "/",
      clean: true,
    },
    devtool: isProd ? false : "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        inject: true,
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? "[name].[contenthash:5].css" : "[name].css",
      }),
      new CleanWebpackPlugin(),
      new ProgressBarPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, "src/gfx"), to: "gfx" }],
      }),
      new WebpackAssetsManifest(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              "imagemin-gifsicle",
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-svgo",
            ],
          },
        },
      }),
      new webpack.DefinePlugin({
        "process.env": envToExport,
      }),
    ],
  };

  if (DEV_SERVER) {
    config.devServer = {
      static: {
        directory: path.join(__dirname, "src"),
      },
      compress: true,
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    };

    config.plugins.push(
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3001,
        proxy: "http://localhost:3000/",
      }),
      new webpack.HotModuleReplacementPlugin(),
    );
  }

  if (WATCH_MODE) {
    config.watch = true;
  }

  return config;
};
