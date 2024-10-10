import {ModuleOptions} from 'webpack';
import {BuildOptions} from './index';
import {applyCssLoaders} from './loaders/applyCssLoaders';
import {applySvgLoaders} from './loaders/applySvgLoaders';

export const loadersConfig = ({mode}: BuildOptions): ModuleOptions['rules'] => {
  const isDev = mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = applySvgLoaders();
  const stylesheetLoader = applyCssLoaders(isDev);

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            }
          ]
        ],
        plugins: [isDev && 'react-refresh/babel'].filter(Boolean)
      }
    }
  };


  return [
    assetLoader,
    ...svgLoader,
    stylesheetLoader,
    babelLoader
  ];
};