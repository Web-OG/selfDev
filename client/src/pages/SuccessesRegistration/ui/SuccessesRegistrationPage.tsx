import {Navigate, useLocation} from 'react-router-dom';
import cls from './SuccessesRegistrationPage.module.scss';

const SuccessesRegistrationPage = () => {
  const stateFromLocation = useLocation().state as { email?: string };
  const email = stateFromLocation && 'email' in stateFromLocation ? stateFromLocation.email : null;

  if (!email) {
    return <Navigate to={'/'}/>;
  }

  return (
    <div className={cls.page}>
      <h1>
        Вы успешно зарегистрировались!
      </h1>
      <h2>
        Осталось чуть-чуть...
      </h2>
      <div>
        <span>Мы отправили на вашу почту:</span> <span className={cls.email}>{email}</span> <span>письмо для подтверждение аккаунта.</span>
      </div>
    </div>
  );
};

export default SuccessesRegistrationPage;
