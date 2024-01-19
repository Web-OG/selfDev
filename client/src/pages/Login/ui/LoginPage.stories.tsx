import type {Meta, StoryObj} from '@storybook/react';

import LoginPage from './LoginPage';
import {withUnauthorizedLayout} from 'app/config/storybook';

const meta: Meta<typeof LoginPage> = {
  title: 'pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  }
};
export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Separate: Story = {
  args: {}
};

export const UnauthorizedLayout: Story = {
  parameters: {
    ...withUnauthorizedLayout(<LoginPage/>),
  }
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    ...withUnauthorizedLayout(<LoginPage/>),
    theme: 'dark'
  }
};
