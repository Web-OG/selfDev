import type {Meta, StoryObj} from '@storybook/react';
import {NewsPreview} from './NewsPreview';

const meta: Meta<typeof NewsPreview> = {
  title: 'entities/News/NewsPreview',
  component: NewsPreview,
  args: {
    title: 'Mock title',
    author: 'Ivan Ivanov',
    date: '30.02.2024',
    desc: 'Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль'
  }
};
export default meta;

type Story = StoryObj<typeof NewsPreview>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};
