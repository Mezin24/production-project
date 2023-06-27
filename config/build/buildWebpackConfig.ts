import path from 'path'
import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/buildTypes'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => { 
  const {mode, paths, isDev} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    devtool: 'inline-source-map',
    plugins: buildPlugins(options),
    resolve: buildResolvers(),
    module: {
      rules: buildLoaders()
    },
  }
 }