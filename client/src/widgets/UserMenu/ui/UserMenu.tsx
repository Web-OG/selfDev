import {memo} from 'react';
import cls from './UserMenu.module.scss';
import {LoginButton, LogoutButton} from '@/features/Authentication';
import {LangSwitcher} from '@/features/LangSwitcher';

interface UserMenuProps {
  authed: boolean
}

const UserMenu = memo((props: UserMenuProps) => {
  const {authed} = props;

  return (
    <div className={cls.wrapper}>
      {!authed && <LangSwitcher short={true}/>}
      {authed ? <LogoutButton/> : <LoginButton/>}
    </div>
  );
});

UserMenu.displayName = 'UserMenu';
export {UserMenu};