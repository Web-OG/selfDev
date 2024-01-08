import {Decorator} from '@storybook/react';
import {ThemeProvider} from '../../../providers/ThemeProvider';

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story/>
      </div>
    </ThemeProvider>
  );
};

