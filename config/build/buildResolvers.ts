import webpack from 'webpack'
import { BuildOptions } from './types/buildTypes'

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => { 
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // for  absolute paths
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
 }