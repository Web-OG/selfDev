import type {Preview} from '@storybook/react';
import {withRouter} from 'storybook-addon-react-router-v6';
import '../../src/app/styles/index.scss';
import '../../src/app/App.scss';
import {LanguageDecorator, ThemeDecorator, StoreDecorator} from 'shared/config/storybook';

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: 'light'
  },
  globalTypes: {
    locale: {
      defaultValue: 'ru',
      description: 'Internationalization locale',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          {value: 'ru', title: 'Русский'},
          {value: 'en', title: 'English'},
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withRouter, StoreDecorator, ThemeDecorator, LanguageDecorator]
};

export default preview;
