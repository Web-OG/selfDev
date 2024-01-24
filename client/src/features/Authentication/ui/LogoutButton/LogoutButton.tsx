import {memo, useCallback} from 'react';
import cls from './LogoutButton.module.scss';
import Icon from 'shared/assets/svgs/logout.svg';
import {useAppDispatch} from 'shared/hooks/useAppDispatch';
import {logout} from 'features/Authentication/model/services/logout/logout';

const LogoutButton = memo(() => {
  const dispatch = useAppDispatch();

  const onClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <button className={cls.button} onClick={onClick}>
      <Icon width="32" height="32"/>
    </button>
  );
});

LogoutButton.displayName = 'LogoutButton';
export {LogoutButton};