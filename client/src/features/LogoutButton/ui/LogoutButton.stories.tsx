import type {Meta, StoryObj} from '@storybook/react';

import {LogoutButton} from './LogoutButton';
import {SecondaryElementDecorator} from 'app/config/storybook';

const meta: Meta<typeof LogoutButton> = {
  title: 'features/LogoutButton',
  component: LogoutButton,
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof LogoutButton>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

