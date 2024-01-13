import {Fragment, memo, useCallback, useState} from 'react';
import cls from './ThemeSwitcher.module.scss';
import {Switch} from '@headlessui/react';
import classNames from 'classnames';
import {useTheme} from 'app/providers/ThemeProvider';

const ThemeSwitcher = memo(() => {
  const {theme, toggleTheme} = useTheme();
  const [enabled, setEnabled] = useState(() => theme === 'app_dark_theme');

  const onThemeToggle = useCallback((checked: boolean) => {
    setEnabled(checked);
    toggleTheme(checked ? 'app_dark_theme' : 'app_light_theme');
  }, [theme]);

  return (
    <Switch checked={enabled} onChange={onThemeToggle} as={Fragment}>
      {({checked}) => (
        <button
          className={classNames(cls.button, {[cls.buttonChecked]: checked})}
        >
          <span
            className={classNames(cls.indicator, {[cls.indicatorChecked]: checked})}
          />
        </button>
      )}
    </Switch>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
export {ThemeSwitcher};