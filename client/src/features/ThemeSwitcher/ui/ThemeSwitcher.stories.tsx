import type {Meta, StoryObj} from '@storybook/react';

import {ThemeSwitcher} from './ThemeSwitcher';
import {SecondaryElementDecorator} from 'app/config/storybook';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

