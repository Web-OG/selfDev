import type {Meta, StoryObj} from '@storybook/react';
import RegistrationPage from './RegistrationPage';
import {LayoutDecorator} from 'shared/config/storybook/decorators/LayoutDecorator';
import {mockUserSlice} from 'shared/config/storybook';
import {reactRouterParameters} from 'storybook-addon-react-router-v6';

const meta: Meta<typeof RegistrationPage> = {
  title: 'pages/RegistrationPage',
  component: RegistrationPage,
  parameters: {
    layout: 'fullscreen',
    reactRouter: reactRouterParameters({
      location: {
        pathParams: {type: 'user'},
      },
      routing: {
        path: '/registration/:type',
      }
    })
  }
};
export default meta;

type Story = StoryObj<typeof RegistrationPage>;

export const Separate: Story = {
  parameters: {
    state: {...mockUserSlice}
  }
};

export const UnauthorizedLayout: Story = {
  parameters: {
    pageLayout: 'unauthorized'
  },
  decorators: [LayoutDecorator]
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'authorized'
  },
  decorators: [LayoutDecorator]
};
