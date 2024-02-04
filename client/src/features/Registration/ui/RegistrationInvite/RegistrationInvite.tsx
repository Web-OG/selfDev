import {memo, useCallback} from 'react';
import cls from './RegistrationInvite.module.scss';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

interface Props {
  onExternalClose?: () => void;
}

const RegistrationInvite = memo((props: Props) => {
  const {onExternalClose} = props;
  const {t} = useTranslation('registration');

  const onClick = useCallback(() => {
    onExternalClose?.();
  }, [onExternalClose]);

  return (
    <div className={cls.RegistrationInvite}>
      {t('Нет аккаунта?')} <Link to="/registration" onClick={onClick}>{t('Зарегистрироваться')}.</Link>
    </div>
  );
});

RegistrationInvite.displayName = 'RegistrationInvite';
export {RegistrationInvite};