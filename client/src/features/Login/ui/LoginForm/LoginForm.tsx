import {memo, useCallback, useState} from 'react';
import cls from './LoginForm.module.scss';
import classNames from 'classnames';
import {Input} from 'shared/ui/Input';
import {Button} from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';

interface LoginFormProps {
  className?: string;
  fixed?: boolean
}

const LoginForm = memo((props: LoginFormProps) => {
  const {className, fixed = false} = props;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();

  const onLoginChange = useCallback((str: string) => {
    setLogin(str);
  }, []);

  const onPasswordChange = useCallback((str: string) => {
    setPassword(str);
  }, []);

  return (
    <form className={classNames(cls.form, {[cls.formFixed]: fixed}, className)}>
      <Input placeholder={'example@mail.com'} label={'Логин'} value={login} onChange={onLoginChange} required/>
      <Input placeholder={'*****'} label={'Пароль'} value={password} onChange={onPasswordChange} required/>
      <Button className={cls.button}>
        {t('Войти')}
      </Button>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';
export {LoginForm};