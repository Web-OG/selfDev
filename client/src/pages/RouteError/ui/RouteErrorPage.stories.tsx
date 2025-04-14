import type {Meta, StoryObj} from '@storybook/react';
import {RouteErrorPage} from './RouteErrorPage';
import {LayoutDecorator} from '@/shared/config/storybook/decorators/LayoutDecorator';
import {mockUserSlice} from '@/shared/lib/mocks/slices';

const meta: Meta<typeof RouteErrorPage> = {
  title: 'pages/RouteErrorPage',
  component: RouteErrorPage,
  args: {
    initialError: {
      message: 'error',
      statusText: 'Страница не существует'
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof RouteErrorPage>;

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

