import {Decorator} from '@storybook/react';
import {ThemeProvider} from '../../../../app/providers/ThemeProvider';

export const ThemeDecorator: Decorator = (Story, context) => {
  const isThemeInParams = 'args' in context && 'theme' in context.parameters,
    themeFromParams = isThemeInParams && context.parameters.theme,
    theme = themeFromParams === 'dark' || themeFromParams === 'app_dark_theme' ? 'app_dark_theme' : 'app_light_theme';

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story/>
      </div>
    </ThemeProvider>
  );
};

