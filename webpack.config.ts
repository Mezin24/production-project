import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/buildTypes';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl
  });

  return config;
};
