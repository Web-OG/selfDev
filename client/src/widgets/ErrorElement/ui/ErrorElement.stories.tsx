import type {Meta, StoryObj} from '@storybook/react';

import {ErrorElement} from './ErrorElement';

const meta: Meta<typeof ErrorElement> = {
  title: 'widgets/ErrorElement',
  component: ErrorElement,
};
export default meta;

type Story = StoryObj<typeof ErrorElement>;

export const Primary: Story = {
  args: {},
};
