import type {Meta, StoryObj} from '@storybook/react';

import AboutPage from './AboutPage';
import {withAuthorizedLayout} from 'app/config/storybook';
import {withUnauthorizedLayout} from 'app/config/storybook/parametrs/reactRouter/withUnauthorizedLayout';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
  },

};
export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Separate: Story = {
  args: {}
};

export const AuthorizedLayout: Story = {
  parameters: {
    ...withAuthorizedLayout(<AboutPage/>),
  }
};

export const UnauthorizedLayout: Story = {
  parameters: {
    ...withUnauthorizedLayout(<AboutPage/>),
  }
};
