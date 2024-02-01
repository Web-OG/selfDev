import type {Meta, StoryObj} from '@storybook/react';
import AboutPage from './AboutPage';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';
import {LayoutDecorator} from 'shared/config/storybook/decorators/LayoutDecorator';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof AboutPage>;

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
