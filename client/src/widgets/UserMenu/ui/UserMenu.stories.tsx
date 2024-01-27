import type {Meta, StoryObj} from '@storybook/react';

import {UserMenu} from './UserMenu';
import {SecondaryElementDecorator} from 'app/config/storybook';
import {StoreDecorator} from 'app/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof UserMenu> = {
  title: 'widgets/UserMenu',
  component: UserMenu,
  decorators: [StoreDecorator, SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof UserMenu>;

export const Authorized: Story = {
  args: {
    authed: true
  },
};

export const AuthorizedDark: Story = {
  parameters: {
    theme: 'dark'
  },
  args: {
    authed: true
  },
};

export const NotAuthorized: Story = {
  args: {
    authed: false
  },
};

export const NotAuthorizedDark: Story = {
  parameters: {
    theme: 'dark'
  },
  args: {
    authed: false
  },
};