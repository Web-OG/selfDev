import type {Meta, StoryObj} from '@storybook/react';

import {LangSwitcher} from './LangSwitcher';
import {SecondaryElementDecorator} from 'shared/config/storybook';

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

export const PrimaryHover: Story = {
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryActive: Story = {
  parameters: {
    pseudo: {
      active: true
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

export const PrimaryDarkActive: Story = {
  parameters: {
    theme: 'dark',
    pseudo: {
      active: true
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

export const Short: Story = {
  args: {
    short: true
  },
};

export const ShortDark: Story = {
  args: {
    short: true
  },
  parameters: {
    theme: 'dark'
  },
};
