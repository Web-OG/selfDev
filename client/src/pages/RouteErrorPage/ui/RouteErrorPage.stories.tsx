import type {Meta, StoryObj} from '@storybook/react';

import {RouteErrorPage} from './RouteErrorPage';
import {withAuthorizedLayout, withUnauthorizedLayout} from 'app/config/storybook';

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
  args: {}
};

export const AuthorizedLayout: Story = {
  parameters: {
    ...withAuthorizedLayout(<RouteErrorPage/>),
  }
};

export const AuthorizedLayoutDark: Story = {
  parameters: {
    ...withAuthorizedLayout(<RouteErrorPage/>),
    theme: 'dark'
  }
};

export const UnauthorizedLayout: Story = {
  parameters: {
    ...withUnauthorizedLayout(<RouteErrorPage/>),
  }
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    ...withUnauthorizedLayout(<RouteErrorPage/>),
    theme: 'dark'
  }
};

