import {memo, useCallback, useState} from 'react';
import cls from './LoginButton.module.scss';
import Icon from 'shared/assets/svgs/login.svg';
import {LoginModal} from '../LoginModal/LoginModal';

const LoginButton = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <button className={cls.button} onClick={() => setIsOpen(true)}>
        <Icon width="32" height="32"/>
      </button>
      <LoginModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
});

LoginButton.displayName = 'LoginButton';
export {LoginButton};