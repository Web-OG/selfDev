import {createContext} from 'react';

export type Theme = 'app_light_theme' | 'app_dark_theme';

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const ThemeContext = createContext<ThemeContextProps>({});


