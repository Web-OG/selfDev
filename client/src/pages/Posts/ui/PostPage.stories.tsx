import type {Meta, StoryObj} from '@storybook/react';

import PostsPage from './PostsPage';
import {withAuthorizedLayout} from 'app/config/storybook';
import {withUnauthorizedLayout} from 'app/config/storybook/parametrs/reactRouter/withUnauthorizedLayout';

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

export const UnauthorizedLayout: Story = {
  parameters: {
    ...withUnauthorizedLayout(<PostsPage/>),
  }
};

