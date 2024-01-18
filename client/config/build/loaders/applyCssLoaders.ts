import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export function applyCssLoaders(isDev: boolean, isNotStorybook: boolean = true) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        },
      },
      'sass-loader',
      isNotStorybook && {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve('src', 'app', 'styles', 'variables.scss')
        }
      }
    ],
  };
}