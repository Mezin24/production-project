import webpack from 'webpack'
import { BuildOptions } from './types/buildTypes'
import  MiniCssExtractPlugin  from "mini-css-extract-plugin"

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
  const tsLoader =       {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  const cssLoader =  {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:5]',
          }
        }
      },
      "sass-loader",
    ],
  }
  
  return [tsLoader, cssLoader]
 }