import path from 'path';
import {BuildMode, BuildOptions, BuildPaths, createWebpackConfig} from "./config/build";

interface Envs {
  mode: BuildMode,
  analyzer?: boolean,
  port: number,
  captcha: boolean
}

export default ({mode, port, analyzer, captcha}: Envs) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  }

  const options: BuildOptions = {
    port: port ?? 3000,
    mode: mode ?? 'development',
    paths,
    analyzer,
    captcha: captcha ?? false
  }

  return createWebpackConfig(options)
}