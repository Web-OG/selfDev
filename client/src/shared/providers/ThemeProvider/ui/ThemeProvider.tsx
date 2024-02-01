import {ReactNode, useMemo, useState} from 'react';
import {Theme, ThemeContext} from '../lib/ThemeContext';
import {StorageDispatcher} from 'shared/services/StorageService';
import {STORAGE_KEYS} from 'shared/constants/storage';

const defaultTheme = StorageDispatcher.getItem(STORAGE_KEYS.THEME_KEY) as Theme || 'app_light_theme';

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
