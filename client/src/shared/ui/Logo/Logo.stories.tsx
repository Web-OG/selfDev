import type {Meta, StoryObj} from '@storybook/react';
import {Logo} from './Logo';
import {SecondaryElementDecorator} from '@/shared/config/storybook';

const meta: Meta<typeof Logo> = {
  title: 'shared/Logo',
  component: Logo,
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: undefined,
};

export const PrimaryWithHoverActiveFocus: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  },
};


export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  }
};

export const PrimaryDarkWithHoverActiveFocus: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    ...PrimaryDark.parameters,
    pseudo: {
      hover: true
    }
  },
};

