import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'content',
    variant: 'primary'
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

export const Outlined: Story = {
  args: {
    children: 'content',
    variant: 'outlined'
  },
};

export const OutlinedHover: Story = {
  args: {
    ...Outlined.args,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const OutlinedActive: Story = {
  args: {
    ...Outlined.args,
  },
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const OutlinedFocus: Story = {
  args: {
    ...Outlined.args,
  },
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const OutlinedDark: Story = {
  args: {
    ...Outlined.args,
  },
  parameters: {
    theme: 'dark'
  },
};

export const OutlinedDarkHover: Story = {
  args: {
    ...Outlined.args,
  },
  parameters: {
    ...OutlinedDark.parameters,
    pseudo: {
      hover: true
    }
  },
};

export const OutlinedDarkActive: Story = {
  args: {
    ...Outlined.args,
  },
  parameters: {
    ...OutlinedDark.parameters,
    pseudo: {
      active: true
    }
  },
};

export const OutlinedDarkFocus: Story = {
  args: {
    ...Outlined.args,
  },
  parameters: {
    ...OutlinedDark.parameters,
    pseudo: {
      focus: true
    }
  },
};

export const Success: Story = {
  args: {
    children: 'content',
    variant: 'success'
  },
};

export const SuccessHover: Story = {
  args: {
    ...Success.args,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const SuccessActive: Story = {
  args: {
    ...Success.args,
  },
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const SuccessFocus: Story = {
  args: {
    ...Success.args,
  },
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const SuccessDark: Story = {
  args: {
    ...Success.args,
  },
  parameters: {
    theme: 'dark'
  },
};

export const SuccessDarkHover: Story = {
  args: {
    ...Success.args,
  },
  parameters: {
    ...SuccessDark.parameters,
    pseudo: {
      hover: true
    }
  },
};

export const SuccessDarkActive: Story = {
  args: {
    ...Success.args,
  },
  parameters: {
    ...SuccessDark.parameters,
    pseudo: {
      active: true
    }
  },
};

export const SuccessDarkFocus: Story = {
  args: {
    ...Success.args,
  },
  parameters: {
    ...SuccessDark.parameters,
    pseudo: {
      focus: true
    }
  },
};

export const Danger: Story = {
  args: {
    children: 'content',
    variant: 'danger'
  },
};

export const DangerHover: Story = {
  args: {
    ...Danger.args,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const DangerActive: Story = {
  args: {
    ...Danger.args,
  },
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const DangerFocus: Story = {
  args: {
    ...Danger.args,
  },
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const DangerDark: Story = {
  args: {
    ...Danger.args,
  },
  parameters: {
    theme: 'dark'
  },
};

export const DangerDarkHover: Story = {
  args: {
    ...Danger.args,
  },
  parameters: {
    ...DangerDark.parameters,
    pseudo: {
      hover: true
    }
  },
};

export const DangerDarkActive: Story = {
  args: {
    ...Danger.args,
  },
  parameters: {
    ...DangerDark.parameters,
    pseudo: {
      active: true
    }
  },
};

export const DangerDarkFocus: Story = {
  args: {
    ...Danger.args,
  },
  parameters: {
    ...DangerDark.parameters,
    pseudo: {
      focus: true
    }
  },
};
