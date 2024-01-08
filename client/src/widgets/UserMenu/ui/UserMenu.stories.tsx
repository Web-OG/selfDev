import type {Meta, StoryObj} from '@storybook/react';

import {UserMenu} from './UserMenu';
import {SecondaryElementDecorator} from 'app/config/storybook';

const meta: Meta<typeof UserMenu> = {
  title: 'widgets/UserMenu',
  component: UserMenu,
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof UserMenu>;

export const Primary: Story = {
  args: {},
};
