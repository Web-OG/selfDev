import type {Meta, StoryObj} from '@storybook/react';

import {Header} from './Header';

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Authorized: Story = {
  args: {
    authed: true
  },
};

export const AuthorizedDark: Story = {
  args: {
    authed: true
  },
  parameters: {
    theme: 'dark'
  }
};

export const NotAuthorized: Story = {
  args: {
    authed: false
  },
};

export const NotAuthorizedDark: Story = {
  args: {
    authed: false
  },
  parameters: {
    theme: 'dark'
  }
};
