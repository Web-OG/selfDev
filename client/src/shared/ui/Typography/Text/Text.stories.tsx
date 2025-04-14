import type {Meta, StoryObj} from '@storybook/react';
import {Text} from './Text';
import {SecondaryElementDecorator} from '@/shared/config/storybook';

const meta: Meta<typeof Text> = {
  title: 'shared/Typography/Text and Link',
  component: Text,
  args: {
    display: 'inline'
  }
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'primary',
    type: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'secondary',
    type: 'secondary'
  },
  decorators: [
    SecondaryElementDecorator
  ]
};

export const Focus: Story = {
  args: {
    children: 'focus',
    type: 'focus'
  }
};

export const Success: Story = {
  args: {
    children: 'success',
    type: 'success'
  }
};

export const Warning: Story = {
  args: {
    children: 'warning',
    type: 'warning'
  }
};

export const Danger: Story = {
  args: {
    children: 'danger',
    type: 'danger'
  }
};

export const Mark: Story = {
  args: {
    children: 'mark',
    type: 'primary',
    mark: true
  }
};

export const Code: Story = {
  args: {
    children: 'code',
    type: 'primary',
    code: true
  }
};

export const Keyboard: Story = {
  args: {
    children: 'keyboard',
    type: 'primary',
    keyboard: true
  }
};

export const Underline: Story = {
  args: {
    children: 'underline',
    type: 'primary',
    underline: true
  }
};

export const Deleted: Story = {
  args: {
    children: 'deleted',
    type: 'primary',
    deleted: true
  }
};

export const Strong: Story = {
  args: {
    children: 'strong',
    type: 'primary',
    strong: true
  }
};

export const Italic: Story = {
  args: {
    children: 'italic',
    type: 'primary',
    italic: true
  }
};
