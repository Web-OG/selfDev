import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

export function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = (theme: Theme) => {
    setTheme?.(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  };

  return {
    theme: theme || 'app_light_theme',
    toggleTheme,
  };
}
