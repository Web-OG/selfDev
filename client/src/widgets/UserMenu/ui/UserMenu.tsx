import {memo} from 'react';
import cls from './UserMenu.module.scss'
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {LogoutButton} from "features/LogoutButton";
import {LangSwitcher} from "features/LangSwitcher";

const UserMenu = memo(() => {
  return (
    <div className={cls.wrapper}>
      <LangSwitcher />
      <ThemeSwitcher/>
      <LogoutButton/>
    </div>
  );
});

UserMenu.displayName = 'UserMenu';
export {UserMenu};