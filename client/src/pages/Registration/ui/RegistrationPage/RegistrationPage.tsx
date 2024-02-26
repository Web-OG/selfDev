import cls from './RegistrationPage.module.scss';
import {Link, Navigate, useParams} from 'react-router-dom';
import {UserRegistrationForm} from 'features/Registration';
import {useTranslation} from 'react-i18next';

const RegistrationPage = () => {
  const {type = undefined} = useParams<'type'>();
  const {t} = useTranslation();
  console.log('RegistrationPage type is ', type);

  if (type === 'author') {
    return <UserRegistrationForm/>;
  }

  if (type === 'user') {
    return (
      <div className={cls.page}>
        <div className={cls.heading}>
          <h1>{t('Регистрация')}</h1>
          <div className={cls.notice}>{t('Все поля обязательны для заполнения *')}</div>
        </div>
        <UserRegistrationForm className={cls.form}/>
        <div>
          {t('Уже зарегистрированы?')} <Link to={'/login'}>{t('Войти')}</Link>
        </div>
      </div>
    );
  }

  return <Navigate to={'*'}/>;
};

export default RegistrationPage;
