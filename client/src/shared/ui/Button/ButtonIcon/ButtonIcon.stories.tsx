import type {Meta, StoryObj} from '@storybook/react';

import {ButtonIcon} from './ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  title: 'shared/Button/ButtonIcon',
  component: ButtonIcon,
};
export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const CrossSizeS: Story = {
  args: {
    variant: 'cross',
    size: 's'
  },
};

export const CrossSizeM: Story = {
  args: {
    size: 'm'
  },
};

export const CrossSizeL: Story = {
  args: {
    size: 'l'
  },
};
