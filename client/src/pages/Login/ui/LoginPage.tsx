import {LoginForm, LoginOpportunities} from 'features/Authentication';
import cls from './LoginPage.module.scss';
import {useTranslation} from 'react-i18next';

const LoginPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <h1 className={cls.title}>
        {t('Войти или зарегистрироваться')}
      </h1>
      <div className={cls.page}>
        <div>
          <h2 className={cls.subTitle}>
            {t('Преимущества аккаунта')}
          </h2>
          <LoginOpportunities/>
        </div>
        <div className={cls.formsWrap}>
          <div className={cls.formWrap}>
            <LoginForm className={cls.form}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
