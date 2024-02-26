import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from './Avatar';
import {SecondaryElementDecorator} from 'shared/config/storybook';
import {DefaultAvatar} from 'shared/ui/Avatar/DefaultAvatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: DefaultAvatar,
  args: {
    src: '.'
  },
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
};


