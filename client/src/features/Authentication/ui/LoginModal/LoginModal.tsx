import {memo} from 'react';
import {Modal, ModalProps} from '@/shared/ui/Modal/Modal';
import {LazyLoginForm} from '../LoginForm/LoginForm.async';
import {useTranslation} from 'react-i18next';

type LoginModalProps = Omit<ModalProps, 'children'>

const LoginModal = memo((props: LoginModalProps) => {
  const {t} = useTranslation();
  
  return (
    <Modal title={t('Войти')} size={'s'} {...props}>
      <LazyLoginForm onClose={props.onClose}/>
    </Modal>
  );
});

LoginModal.displayName = 'LoginModal';
export {LoginModal};