import {ReactNode, useMemo, useState} from 'react';
import {Theme, ThemeContext} from '../lib/ThemeContext';
import {StorageDispatcher} from 'shared/lib/services/StorageService';

const defaultTheme = StorageDispatcher.getItem('theme') as Theme || 'app_light_theme';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const {children, initialTheme} = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
