import path from 'path';
import {BuildEnvs, BuildOptions, BuildPaths, createWebpackConfig} from './config/build';

export default (environments: BuildEnvs) => {
  const {mode, port, analyzer, captcha, apiUrl} = environments;

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const options: BuildOptions = {
    port: port ?? 3000,
    mode: mode ?? 'development',
    paths,
    analyzer,
    captcha: captcha ?? false,
    apiUrl: apiUrl || 'http://localhost:8000'
  };

  return createWebpackConfig(options);
};