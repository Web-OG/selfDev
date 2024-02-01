import type {Meta, StoryObj} from '@storybook/react';

import {LoginModal} from './LoginModal';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
  title: 'features/Authentication/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true
  },
  decorators: [StoreDecorator]
};
export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

