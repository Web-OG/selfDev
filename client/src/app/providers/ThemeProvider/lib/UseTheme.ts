import {useContext} from 'react';
import {STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {StorageDispatcher} from 'shared/services/StorageService';

export function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = (theme: Theme) => {
    setTheme?.(theme);
    StorageDispatcher.setItem(STORAGE_THEME_KEY, theme);
  };

  return {
    theme: theme || 'app_light_theme',
    toggleTheme,
  };
}
