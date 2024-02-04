import {memo} from 'react';
import {RegistrationVariantTemplate} from './ReagistrationVariantTemplate/ReagistrationVariantTemplate';
import cls from './RegistrationVariant.module.scss';

const userOpportunities = ['Читать статьи', 'Сохранять избранное', 'Покупать курсы', 'Находить друзей и общаться'];
const authorOpportunities = ['Писать статьи', 'Выкладывать курсы', 'Продавать курсы', 'Взимать плату', 'Статистика'];

const RegistrationVariant = memo(() => {
  return (
    <div className={cls.page}>
      <h1 className={cls.title}>В качестве кого вы хотите зарегистрироваться?</h1>
      <div className={cls.variants}>
        <RegistrationVariantTemplate to="/registration/user" roleName="Пользователь" opportunities={userOpportunities}/>
        <RegistrationVariantTemplate to="/registration/author" roleName="Автор" opportunities={authorOpportunities}/>
      </div>
    </div>
  );
});

RegistrationVariant.displayName = 'RegistrationVariant';
export {RegistrationVariant};