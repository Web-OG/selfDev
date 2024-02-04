import {memo, useCallback, useState, MouseEvent} from 'react';
import cls from './RegistrationInvite.module.scss';
import {useTranslation} from 'react-i18next';
import {RegistrationModal} from 'features/Registration/ui/RegistrationModal/RegistrationModal';

const RegistrationInvite = memo(() => {
  const {t} = useTranslation('registration');
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={cls.RegistrationInvite}>
      {t('Нет аккаунта?')} <a href="#" onClick={onClick}>{t('Зарегистрироваться')}.</a>
      <RegistrationModal isOpen={isOpen} onClose={onClose}/>
    </div>
  );
});

RegistrationInvite.displayName = 'RegistrationInvite';
export {RegistrationInvite};