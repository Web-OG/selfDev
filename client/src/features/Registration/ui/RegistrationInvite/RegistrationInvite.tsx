import {memo} from 'react';
import cls from './RegistrationInvite.module.scss';
import {useTranslation} from 'react-i18next';

const RegistrationInvite = memo(() => {
  const {t} = useTranslation('registrationInvite');

  return (
    <div className={cls.RegistrationInvite}>
      {t('Нет аккаунта?')} <a href="#">{t('Зарегистрироваться')}.</a>
    </div>
  );
});

RegistrationInvite.displayName = 'RegistrationInvite';
export {RegistrationInvite};