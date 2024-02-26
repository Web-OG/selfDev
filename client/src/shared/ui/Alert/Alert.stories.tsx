import type {Meta, StoryObj} from '@storybook/react';
import {Alert} from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'shared/Alert',
  component: Alert,
  args: {
    children: 'content',
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {},
};

export const SuccessWithTitle: Story = {
  args: {
    title: 'Title title',
    children: 'Content content content',
  },
};

export const SuccessWithOpacity: Story = {
  args: {
    title: 'Title title',
    children: 'Content content content',
    opacity: true
  },
};

export const SuccessOutlined: Story = {
  args: {
    variant: 'outlined'
  },
};

export const Info: Story = {
  args: {
    severity: 'info'
  },
};

export const InfoOutlined: Story = {
  args: {
    severity: 'info',
    variant: 'outlined'
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning'
  },
};

export const WarningOutlined: Story = {
  args: {
    severity: 'warning',
    variant: 'outlined'
  },
};

export const Error: Story = {
  args: {
    severity: 'error'
  },
};

export const ErrorOutlined: Story = {
  args: {
    severity: 'error',
    variant: 'outlined',
  },
};
