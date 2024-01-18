import {memo} from 'react';
import {Modal, ModalProps} from 'shared/ui/Modal/Modal';
import {LoginForm} from '../LoginForm/LoginForm';

type LoginModalProps = Omit<ModalProps, 'children'>

const LoginModal = memo((props: LoginModalProps) => {
  return (
    <Modal title={'Войти'} size={'s'} {...props}>
      <LoginForm />
    </Modal>
  );
});

LoginModal.displayName = 'LoginModal';
export {LoginModal};