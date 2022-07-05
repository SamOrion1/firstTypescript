const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Stats } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  experiments : {topLevelAwait: true},
  entry: path.resolve(__dirname, './src/view-model/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    clean: true,
    assetModuleFilename: 'images/[name][ext][query]'
  },

  stats: {
      children: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
            minimize: true,
        }, 
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
        

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/view-model/index.html'),
      filename: "index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
],
};

