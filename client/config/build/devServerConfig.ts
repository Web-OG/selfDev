import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {BuildOptions} from './index';

export const devServerConfig = (options: BuildOptions): DevServerConfiguration => ({
  historyApiFallback: true,
  open: true,
  port: options.port ?? 3000,
  hot: true
});
