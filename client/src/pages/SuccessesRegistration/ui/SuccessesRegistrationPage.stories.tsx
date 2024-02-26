import type {Meta, StoryObj} from '@storybook/react';
import SuccessesRegistrationPage from './SuccessesRegistrationPage';
import {LayoutDecorator} from 'shared/config/storybook/decorators/LayoutDecorator';
import {mockUserSlice} from 'shared/config/storybook';

const meta: Meta<typeof SuccessesRegistrationPage> = {
  title: 'pages/SuccessesRegistrationPage',
  component: SuccessesRegistrationPage,
  parameters: {
    layout: 'fullscreen',
  }
};
export default meta;

type Story = StoryObj<typeof SuccessesRegistrationPage>;

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
