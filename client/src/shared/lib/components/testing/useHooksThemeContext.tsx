import {ReactNode, useState} from 'react';
import {Theme, ThemeContext} from '@/shared/providers/ThemeProvider/lib/ThemeContext';

export const useHooksThemeContext = ({children}: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('app_light_theme');

  return <ThemeContext.Provider value={{
    setTheme,
    theme
  }}>
    {children}
  </ThemeContext.Provider>;
};