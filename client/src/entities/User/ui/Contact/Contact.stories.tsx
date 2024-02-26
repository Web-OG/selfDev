import type {Meta, StoryObj} from '@storybook/react';
import {Contact} from './Contact';

const meta: Meta<typeof Contact> = {
  title: 'entities/User/Contact',
  component: Contact,
  args: {
    role: 'director',
    email: 'mail@example.com',
    name: 'Ivan Ivanov'
  }
};
export default meta;

type Story = StoryObj<typeof Contact>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};
