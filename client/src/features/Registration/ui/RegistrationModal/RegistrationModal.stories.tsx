import type {Meta, StoryObj} from '@storybook/react';

import {RegistrationModal} from './RegistrationModal';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof RegistrationModal> = {
  title: 'features/Registration/RegistrationModal',
  component: RegistrationModal,
  args: {
    isOpen: true
  },
  decorators: [StoreDecorator]
};
export default meta;

type Story = StoryObj<typeof RegistrationModal>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

