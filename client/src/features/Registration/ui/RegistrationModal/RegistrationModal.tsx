import {memo} from 'react';
import {Modal, ModalProps} from 'shared/ui/Modal/Modal';
import {RegistrationVariantTemplate} from './ReagistrationVariantTemplate/ReagistrationVariantTemplate';
import cls from './RegistrationModal.module.scss';

type LoginModalProps = Omit<ModalProps, 'children'>

const userOpportunities = ['Читать статьи', 'Сохранять избранное', 'Покупать курсы', 'Находить друзей и общаться'];
const authorOpportunities = ['Писать статьи', 'Выкладывать курсы', 'Продавать курсы', 'Взимать плату', 'Статистика'];

const RegistrationModal = memo((props: LoginModalProps) => {
  return (
    <Modal title={'В качестве кого вы хотите зарегистрироваться?'} size={'l'} {...props}>
      <div className={cls.variants}>
        <RegistrationVariantTemplate to="/registration/user" roleName="Пользователь" opportunities={userOpportunities}/>
        <RegistrationVariantTemplate to="/registration/author" roleName="Автор" opportunities={authorOpportunities}/>
      </div>
    </Modal>
  );
});

RegistrationModal.displayName = 'RegistrationModal';
export {RegistrationModal};