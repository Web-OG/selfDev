import path from "path";
import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./index";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import {DefinePlugin} from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export const pluginsConfig = ({paths, analyzer, captcha, mode}: BuildOptions): Configuration['plugins'] => {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
        template: paths.html,
        favicon: path.resolve(paths.public, 'favicon.ico')
      }
    ),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __CAPTCHA__: JSON.stringify(captcha)
    }),
  ]

  if (isDev) {
    plugins.push(new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }))
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }))
    plugins.push(new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'locales'),
          to: path.resolve(paths.output, 'locales')
        },
      ],
    }),)
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins;
}