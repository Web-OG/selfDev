import {FormEvent, memo, useCallback, useState} from 'react';
import cls from './LoginForm.module.scss';
import classNames from 'classnames';
import {Input} from 'shared/ui/Input';
import {Button} from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {login} from 'features/Authentication/model/services/login/login';
import {useAppDispatch} from 'shared/hooks/useAppDispatch';

interface LoginFormProps {
  className?: string;
  fixed?: boolean
}

const LoginForm = memo((props: LoginFormProps) => {
  const {className, fixed = false} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  const onSubmit = useCallback((evt: FormEvent) => {
    evt.preventDefault();
    dispatch(login({username, password}));
  }, [dispatch, username, password]);

  const onLoginChange = useCallback((str: string) => {
    setUsername(str);
  }, []);

  const onPasswordChange = useCallback((str: string) => {
    setPassword(str);
  }, []);

  return (
    <form onSubmit={onSubmit} className={classNames(cls.form, {[cls.formFixed]: fixed}, className)}>
      <Input placeholder={'example@mail.com'} label={t('Логин')} value={username} onChange={onLoginChange} required/>
      <Input placeholder={'*****'} label={t('Пароль')} value={password} onChange={onPasswordChange} required/>
      <Button className={cls.button} type="submit">
        {t('Войти')}
      </Button>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';
export {LoginForm};