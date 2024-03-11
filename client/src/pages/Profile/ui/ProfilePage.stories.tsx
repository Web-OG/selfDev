import type {Meta, StoryObj} from '@storybook/react';

import ProfilePage from './ProfilePage';
import {LayoutDecorator} from 'shared/config/storybook/decorators/LayoutDecorator';
import {mockUserSlice} from 'shared/lib/mocks/slices';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Separate: Story = {
  parameters: {
    state: {...mockUserSlice}
  }
};

export const AuthorizedLayout: Story = {
  parameters: {
    pageLayout: 'authorized',
    state: {...mockUserSlice}
  },
  decorators: [LayoutDecorator]
};

export const AuthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'authorized',
    state: {...mockUserSlice}
  },
  decorators: [LayoutDecorator]
};


