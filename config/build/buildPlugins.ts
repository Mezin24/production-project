import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/buildTypes"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => { 
  const {paths, isDev} = options
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __isDev__ : JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin()
]
 }