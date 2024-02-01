import {useContext} from 'react';
import {Theme, ThemeContext} from './ThemeContext';
import {StorageDispatcher} from 'shared/services/StorageService';
import {STORAGE_KEYS} from 'shared/constants/storage';

export function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = (theme: Theme) => {
    setTheme?.(theme);
    StorageDispatcher.setItem(STORAGE_KEYS.THEME_KEY, theme);
  };

  return {
    theme: theme || 'app_light_theme',
    toggleTheme,
  };
}
