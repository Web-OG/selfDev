import {memo} from 'react';
import cls from './LogoutButton.module.scss';
import Icon from 'shared/assets/svgs/logout.svg';

const LogoutButton = memo(() => {
  return (
    <button className={cls.button}>
      <Icon className={cls.icon} width='32' height='32'/>
    </button>
  );
});

LogoutButton.displayName = 'LogoutButton';
export {LogoutButton};