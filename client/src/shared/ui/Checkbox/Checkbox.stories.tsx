import type {Meta, StoryObj} from '@storybook/react';
import {Checkbox} from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'shared/Checkbox',
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'check box'
  },
};

export const PrimaryHover: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryActive: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const PrimaryFocus: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const PrimaryDark: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    theme: 'dark'
  },
};

export const PrimaryDarkHover: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    ...PrimaryDark.parameters,
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryDarkActive: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    ...PrimaryDark.parameters,
    pseudo: {
      active: true
    }
  },
};

export const PrimaryDarkFocus: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    ...PrimaryDark.parameters,
    pseudo: {
      focus: true
    }
  },
};
