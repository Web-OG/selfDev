import {LoginForm, LoginOpportunities} from 'features/Login';
import cls from './LoginPage.module.scss';

const LoginPage = () => {

  return (
    <>
      <h1 className={cls.title}>
      Войти или зарегистрироваться
      </h1>
      <div className={cls.page}>
        <div>
          <h2 className={cls.subTitle}>
            Преимущества аккаунта
          </h2>
          <LoginOpportunities/>
        </div>
        <div className={cls.formsWrap}>
          <div className={cls.formWrap}>
            <LoginForm className={cls.form}/>
          </div>
          <div className={cls.formWrap}>
            Нет аккаунта? <a href="#">Зарегистрироваться.</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
