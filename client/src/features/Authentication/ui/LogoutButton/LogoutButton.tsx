import {memo, useCallback} from 'react';
import cls from './LogoutButton.module.scss';
import Icon from '@/shared/assets/svgs/logout.svg';
import {useAppDispatch} from '@/app/providers/StoreProvider/lib/useAppDispatch';
import {postLogout} from '../../model/services/postLogout';

const LogoutButton = memo(() => {
  const dispatch = useAppDispatch();

  const onClick = useCallback(() => {
    dispatch(postLogout());
  }, [dispatch]);

  return (
    <button className={cls.button} onClick={onClick}>
      <Icon width="32" height="32"/>
    </button>
  );
});

LogoutButton.displayName = 'LogoutButton';
export {LogoutButton};