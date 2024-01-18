import {type Meta, type StoryObj} from '@storybook/react';
import {Modal} from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis deleniti eius fugiat omnis porro quam quibusdam rem, unde voluptas.';

export const Primary: Story = {
  args: {
    children: content
  },
};

export const PrimaryDark: Story = {
  args: {
    children: content
  },
  parameters: {
    theme: 'dark'
  }
};

export const PrimaryWithTitle: Story = {
  args: {
    title: 'example title',
    children: content
  },
};

export const PrimaryWithTitleDark: Story = {
  args: {
    title: 'example title',
    children: content
  },
  parameters: {
    theme: 'dark'
  }
};

export const PrimarySizeS: Story = {
  args: {
    size: 's',
    children: content
  },
};

export const PrimarySizeM: Story = {
  args: {
    children: content
  },
};

export const PrimarySizeL: Story = {
  args: {
    size: 'l',
    children: content
  },
};