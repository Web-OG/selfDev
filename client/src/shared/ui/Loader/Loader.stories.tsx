import type {Meta, StoryObj} from '@storybook/react';

import {Loader} from './Loader';
import {SecondaryElementDecorator} from 'app/config/storybook';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {
    onSecondary: false
  },
};

export const PrimaryOnSecondary: Story = {
  args: {
    onSecondary: true
  },
  decorators: [SecondaryElementDecorator]
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
  args: {
    onSecondary: false
  },
};
