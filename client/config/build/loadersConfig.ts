import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./index";
import ReactRefreshTypeScript from "react-refresh-typescript";

export const loadersConfig = ({mode}: BuildOptions): ModuleOptions['rules'] => {
  const isDev = mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const svgLoader = [
    {
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            typescript: true
          }
        }
      ],
    }
  ]

  const stylesheetLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        },
      },
      "sass-loader",
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      getCustomTransformers: () => ({
        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
      }),
    }
  }

  return [
    assetLoader,
    ...svgLoader,
    stylesheetLoader,
    typescriptLoader,
  ]
}