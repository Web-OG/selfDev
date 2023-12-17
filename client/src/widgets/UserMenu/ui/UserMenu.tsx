import {memo} from 'react';
import cls from './UserMenu.module.scss'
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {LogoutButton} from "features/LogoutButton";

const UserMenu = memo(() => {
  return (
    <div className={cls.wrapper}>
      <ThemeSwitcher/>
      <LogoutButton/>
    </div>
  );
});

UserMenu.displayName = 'UserMenu';
export {UserMenu};