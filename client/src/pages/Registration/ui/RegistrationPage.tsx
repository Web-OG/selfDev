import cls from './RegistrationPage.module.scss';
import {Link, Navigate, useParams} from 'react-router-dom';
import {UserRegistrationForm} from 'features/Registration';

const RegistrationPage = () => {
  const {type} = useParams<'type'>();

  if (type === 'author') {
    return <UserRegistrationForm/>;
  }

  if (type === 'user') {
    return (
      <div className={cls.page}>
        <div className={cls.heading}>
          <h1>Регистрация</h1>
          <div className={cls.notice}>Все поля обязательны для заполнения *</div>
        </div>
        <UserRegistrationForm className={cls.form}/>
        <div>
          Уже зарегистрированы? <Link to={'/login'}>Войти</Link>
        </div>
      </div>
    );
  }

  return <Navigate to={'*'}/>;

};

export default RegistrationPage;
