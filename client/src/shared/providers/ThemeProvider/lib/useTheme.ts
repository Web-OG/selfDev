import {useContext} from 'react';
import {Theme, ThemeContext} from './ThemeContext';
import {StorageDispatcher} from 'shared/lib/services/StorageService';

export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  console.log(theme, setTheme);
  const toggleTheme = (theme: Theme) => {
    setTheme?.(theme);
    StorageDispatcher.setItem('theme', theme);
  };

  return {
    theme: theme || 'app_light_theme',
    toggleTheme,
  };
};
