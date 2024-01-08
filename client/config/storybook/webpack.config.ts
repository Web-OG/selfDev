import webpack, {DefinePlugin, RuleSetRule} from 'webpack';
import path from 'path';
import {buildCssLoader, BuildPaths} from '../build';

export default ({config}: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    output: '',
    html: '',
    entry: '',
    public: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules = config.module.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i};
    }

    return rule;
  });

  config!.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('@svgr/webpack'),
        options: {
          prettier: false,
          svgo: false,
          svgoConfig: {
            plugins: [{ removeViewBox: false }]
          },
          titleProp: true,
          ref: true
        }
      }
    ],
  });
  config.module.rules.push(buildCssLoader(true));

  config.plugins.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
