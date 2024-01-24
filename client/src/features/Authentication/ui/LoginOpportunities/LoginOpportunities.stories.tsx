import type {Meta, StoryObj} from '@storybook/react';

import {LoginOpportunities} from './LoginOpportunities';

const meta: Meta<typeof LoginOpportunities> = {
  title: 'features/Authentication/LoginOpportunities',
  component: LoginOpportunities,
  args: {
    isOpen: true
  }
};
export default meta;

type Story = StoryObj<typeof LoginOpportunities>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

