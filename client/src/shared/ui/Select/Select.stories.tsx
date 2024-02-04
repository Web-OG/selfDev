import type {Meta, StoryObj} from '@storybook/react';
import {Select} from './Select';
import {SecondaryElementDecorator} from 'shared/config/storybook';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    options: [
      {value: 'test1', content: 'test test1'},
      {value: 'test2', content: 'test test2'},
      {value: 'test3', content: 'test test3'},
      {value: 'test4', content: 'test test4'},
      {value: 'test5', content: 'test test5'},
    ]
  },
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

