import type {Meta, StoryObj} from '@storybook/react';

import AboutPage from './AboutPage';
import {withAuthorizedLayout, withUnauthorizedLayout} from 'app/config/storybook';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
  }
};
export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Separate: Story = {
  args: {}
};

export const AuthorizedLayout: Story = {
  parameters: {
    ...withAuthorizedLayout(<AboutPage/>),
  },
};

export const AuthorizedLayoutDark: Story = {
  parameters: {
    ...withAuthorizedLayout(<AboutPage/>),
    theme: 'dark'
  },
};


export const UnauthorizedLayout: Story = {
  parameters: {
    ...withUnauthorizedLayout(<AboutPage/>),
  }
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    ...withUnauthorizedLayout(<AboutPage/>),
    theme: 'dark'
  }
};
