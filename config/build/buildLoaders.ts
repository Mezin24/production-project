import webpack from 'webpack';
import { BuildOptions } from './types/buildTypes';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  return [svgLoader, fileLoader, tsLoader, cssLoader];
};
