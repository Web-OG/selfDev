import type {Meta, StoryObj} from '@storybook/react';

import {ThemeSwitcher} from './ThemeSwitcher';
import {SecondaryElementDecorator} from '@/shared/config/storybook';

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

export const PrimaryHover: Story = {
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryFocus: Story = {
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

export const PrimaryDarkHover: Story = {
  parameters: {
    theme: 'dark',
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryDarkFocus: Story = {
  parameters: {
    theme: 'dark',
    pseudo: {
      focus: true
    }
  },
};

