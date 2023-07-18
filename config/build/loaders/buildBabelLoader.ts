import { BuildOptions } from '../types/buildTypes';

export function buildBabelLoader(options: BuildOptions) {
  const { isDev } = options;
  return {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ],
  };
}
