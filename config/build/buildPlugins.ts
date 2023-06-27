import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/buildTypes"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => { 
  const {paths} = options
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
]
 }