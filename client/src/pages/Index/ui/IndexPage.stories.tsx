import type {Meta, StoryObj} from '@storybook/react';

import IndexPage from './IndexPage';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';
import {LayoutDecorator} from 'shared/config/storybook/decorators/LayoutDecorator';
import {mockUserSlice} from 'shared/config/storybook';

const meta: Meta<typeof IndexPage> = {
  title: 'pages/IndexPage',
  component: IndexPage,
  parameters: {
    layout: 'fullscreen',
  }
};
export default meta;

type Story = StoryObj<typeof IndexPage>;

export const Separate: Story = {
  parameters: {
    state: {...mockUserSlice}
  },
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


export const UnauthorizedLayout: Story = {
  parameters: {
    pageLayout: 'unauthorized'
  },
  decorators: [LayoutDecorator]
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'unauthorized'
  },
  decorators: [LayoutDecorator]
};
