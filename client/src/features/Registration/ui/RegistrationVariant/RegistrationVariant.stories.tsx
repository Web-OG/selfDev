import type {Meta, StoryObj} from '@storybook/react';

import {RegistrationVariant} from './RegistrationVariant';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof RegistrationVariant> = {
  title: 'features/Registration/RegistrationVariant',
  component: RegistrationVariant,
  args: {
    isOpen: true
  },
  decorators: [StoreDecorator]
};
export default meta;

type Story = StoryObj<typeof RegistrationVariant>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

