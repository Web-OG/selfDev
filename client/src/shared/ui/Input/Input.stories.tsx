import type {Meta, StoryObj} from '@storybook/react';

import {Input} from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  args: {
    style: {
      width: '180px'
    }
  }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const PrimaryEmpty: Story = {
  args: {
    placeholder: 'placeholder'
  },
};

export const PrimaryEmptyHover: Story = {
  args: {
    ...PrimaryEmpty.args,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryEmptyActive: Story = {
  args: {
    ...PrimaryEmpty.args,
  },
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const PrimaryEmptyFocus: Story = {
  args: {
    ...PrimaryEmpty.args,
  },
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const PrimaryDarkEmpty: Story = {
  args: {
    ...PrimaryEmpty.args,
  },
  parameters: {
    theme: 'dark'
  },
};

export const PrimaryDarkEmptyHover: Story = {
  args: {
    ...PrimaryEmpty.args
  },
  parameters: {
    ...PrimaryDarkEmpty.parameters,
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryDarkEmptyActive: Story = {
  args: {
    ...PrimaryEmpty.args
  },
  parameters: {
    ...PrimaryDarkEmpty.parameters,
    pseudo: {
      active: true
    }
  },
};

export const PrimaryDarkEmptyFocus: Story = {
  args: {
    ...PrimaryEmpty.args
  },
  parameters: {
    ...PrimaryDarkEmpty.parameters,
    pseudo: {
      focus: true
    }
  },
};

export const PrimaryEmptyWithLabel: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder'
  },
};

export const PrimaryDarkEmptyWithLabel: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder'
  },
  parameters: {
    ...PrimaryDarkEmpty.parameters,
  }
};

export const PrimaryFilled: Story = {
  args: {
    value: 'test value'
  },
};

export const PrimaryFilledHover: Story = {
  args: {
    ...PrimaryFilled.args,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryFilledActive: Story = {
  args: {
    ...PrimaryFilled.args,
  },
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const PrimaryFilledFocus: Story = {
  args: {
    ...PrimaryFilled.args,
  },
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const PrimaryDarkFilled: Story = {
  args: {
    ...PrimaryFilled.args,
  },
  parameters: {
    theme: 'dark'
  },
};

export const PrimaryDarkFilledHover: Story = {
  args: {
    ...PrimaryFilled.args,
  },
  parameters: {
    ...PrimaryDarkFilled.parameters,
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryDarkFilledActive: Story = {
  args: {
    ...PrimaryFilled.args,
  },
  parameters: {
    ...PrimaryDarkFilled.parameters,
    pseudo: {
      active: true
    }
  },
};

export const PrimaryDarkFilledFocus: Story = {
  args: {
    ...PrimaryFilled.args,
  },
  parameters: {
    ...PrimaryDarkFilled.parameters,
    pseudo: {
      focus: true
    }
  },
};

export const PrimaryFilledWithLabel: Story = {
  args: {
    label: 'label',
    value: 'test value'
  },
};

export const PrimaryDarkFilledWithLabel: Story = {
  args: {
    ...PrimaryFilledWithLabel.args,
  },
  parameters: {
    ...PrimaryDarkFilled.parameters,
    pseudo: {
      focus: true
    }
  },
};
