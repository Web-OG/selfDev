import type {Meta, StoryObj} from '@storybook/react';

import {AppNavLink} from './AppNavLink';
import {SecondaryElementDecorator} from 'app/config/storybook';
import {reactRouterParameters} from 'storybook-addon-react-router-v6';

const meta: Meta<typeof AppNavLink> = {
  title: 'shared/AppNavLink',
  component: AppNavLink,
  args: {
    children: 'content',
    to: '/'
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/active',
      }
    })
  },
  decorators: [SecondaryElementDecorator]
};
export default meta;

type Story = StoryObj<typeof AppNavLink>;

export const Primary: Story = {
  args: {},
};

export const PrimaryHover: Story = {
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryActive: Story = {
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const PrimaryFocus: Story = {
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const Active: Story = {
  args: {
    to: '/active'
  },
};

