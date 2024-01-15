import type {Meta, StoryObj} from '@storybook/react';

import PostsPage from './PostsPage';
import {withAuthorizedLayout, withUnauthorizedLayout} from 'app/config/storybook';

const meta: Meta<typeof PostsPage> = {
  title: 'pages/PostsPage',
  component: PostsPage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof PostsPage>;

export const Separate: Story = {
  args: {}
};

export const AuthorizedLayout: Story = {
  parameters: {
    ...withAuthorizedLayout(<PostsPage/>),
  }
};

export const AuthorizedLayoutDark: Story = {
  parameters: {
    ...withAuthorizedLayout(<PostsPage/>),
    theme: 'dark'
  }
};

export const UnauthorizedLayout: Story = {
  parameters: {
    ...withUnauthorizedLayout(<PostsPage/>),
  }
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    ...withUnauthorizedLayout(<PostsPage/>),
    theme: 'dark'
  }
};

