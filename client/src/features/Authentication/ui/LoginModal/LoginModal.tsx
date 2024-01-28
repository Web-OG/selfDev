import {memo} from 'react';
import {Modal, ModalProps} from 'shared/ui/Modal/Modal';
import {LazyLoginForm} from '../LoginForm/LoginForm.async';

type LoginModalProps = Omit<ModalProps, 'children'>

const LoginModal = memo((props: LoginModalProps) => {
  return (
    <Modal title={'Войти'} size={'s'} {...props}>
      <LazyLoginForm/>
    </Modal>
  );
});

LoginModal.displayName = 'LoginModal';
export {LoginModal};