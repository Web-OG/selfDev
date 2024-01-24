import type {Meta, StoryObj} from '@storybook/react';

import {LoginForm} from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/Authentication/LoginForm',
  component: LoginForm,
  args: {
    fixed: true
  }
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

