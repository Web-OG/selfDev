import type {Meta, StoryObj} from '@storybook/react';

import {LangSwitcher} from './LangSwitcher';
import {SecondaryElementDecorator} from 'app/config/storybook';

const meta: Meta<typeof LangSwitcher> = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof LangSwitcher>;

export const Primary: Story = {
  args: {},
};

export const Short: Story = {
  args: {
    short: true
  },
};
