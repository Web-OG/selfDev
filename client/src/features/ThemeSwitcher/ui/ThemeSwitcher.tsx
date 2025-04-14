import {Fragment, memo, useCallback, useState} from 'react';
import cls from './ThemeSwitcher.module.scss';
import {Switch} from '@headlessui/react';
import classNames from 'classnames';
import {useTheme} from '@/shared/providers/ThemeProvider';

const ThemeSwitcher = memo(() => {
  const {theme, toggleTheme} = useTheme();
  const [enabled, setEnabled] = useState(() => theme === 'app_dark_theme');

  const onThemeToggle = useCallback((checked: boolean) => {
    setEnabled(checked);
    toggleTheme(checked ? 'app_dark_theme' : 'app_light_theme');
  }, [toggleTheme]);

  return (
    <Switch checked={enabled} onChange={onThemeToggle} as={Fragment}>
      {({checked}) => (
        <button
          className={classNames(cls.button, {[cls.buttonChecked]: checked})} data-testid="toggle"
        >
          <span
            className={classNames(cls.indicator, {[cls.indicatorChecked]: checked})} data-testid="indicator"
          />
        </button>
      )}
    </Switch>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
export {ThemeSwitcher};