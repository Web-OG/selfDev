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
    isAuth: true
  },
};

export const NotAuthorized: Story = {
  args: {
    isAuth: false
  },
};
