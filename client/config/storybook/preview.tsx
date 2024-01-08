import type {Preview} from '@storybook/react';
import {withRouter} from 'storybook-addon-react-router-v6';
import '../../src/app/styles/index.scss';
import {LanguageDecorator, ThemeDecorator} from 'app/config/storybook';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'app_light_theme',
      toolbar: {
        title: 'Theme',
        items: [
          {value: 'app_light_theme', icon: 'starhollow', title: 'Light (default)'},
          {value: 'app_dark_theme', icon: 'star', title: 'Dark'},
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      defaultValue: 'ru',
      description: 'Internationalization locale',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'ru', title: 'Русский' },
          { value: 'en', title: 'English' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withRouter, ThemeDecorator,  LanguageDecorator]
};

export default preview;
