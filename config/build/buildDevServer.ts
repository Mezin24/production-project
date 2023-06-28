import { BuildOptions } from "./types/buildTypes";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const {port} = options
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}