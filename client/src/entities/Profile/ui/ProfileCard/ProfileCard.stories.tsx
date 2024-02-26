import type {Meta, StoryObj} from '@storybook/react';
import {ProfileCard} from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  args: {
    phone: '89998887766',
    age: 18,
    city: 'Moscow',
    country: 'Russia',
    currency: 'RUB',
    firstname: 'Ivan',
    lastname: 'Ivanov',
  }
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};
