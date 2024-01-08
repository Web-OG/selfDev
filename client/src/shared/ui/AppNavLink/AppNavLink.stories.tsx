import type {Meta, StoryObj} from '@storybook/react';

import {AppNavLink} from './AppNavLink';
import {SecondaryElementDecorator} from 'app/config/storybook';

const meta: Meta<typeof AppNavLink> = {
  title: 'shared/AppNavLink',
  component: AppNavLink,
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof AppNavLink>;

export const Primary: Story = {
  args: {
    children: 'content',
  },
};
