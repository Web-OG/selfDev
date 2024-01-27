import type {Meta, StoryObj} from '@storybook/react';

import {RouteErrorPage} from './RouteErrorPage';
import {StoreDecorator} from 'app/config/storybook/decorators/StoreDecorator';
import {LayoutDecorator} from 'app/config/storybook/decorators/LayoutDecorator';

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
  decorators: [StoreDecorator]
};

export const AuthorizedLayout: Story = {
  parameters: {
    pageLayout: 'authorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};

export const AuthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'authorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};


export const UnauthorizedLayout: Story = {
  parameters: {
    pageLayout: 'unauthorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'authorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};

