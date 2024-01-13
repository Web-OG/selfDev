import {memo} from 'react';
import cls from './UserMenu.module.scss';
import {LogoutButton} from 'features/LogoutButton';

const UserMenu = memo(() => {
  return (
    <div className={cls.wrapper}>
      <LogoutButton/>
    </div>
  );
});

UserMenu.displayName = 'UserMenu';
export {UserMenu};