import {FormEvent, memo, useCallback} from 'react';
import cls from './LoginForm.module.scss';
import classNames from 'classnames';
import {Input} from 'shared/ui/Input';
import {Button} from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {login} from '../../model/services/login/login';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {authenticationActions, authenticationReducer} from '../../model/slices/authenticationSlice';
import {useSelector} from 'react-redux';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {STORAGE_KEYS} from 'shared/constants/storage';

interface LoginFormProps {
  className?: string;
  fixed?: boolean;
  onClose?: () => void;
}

const initialReducers: ReducersList = {
  authentication: authenticationReducer
};

const LoginForm = memo((props: LoginFormProps) => {
  const {className, onClose, fixed = false} = props;
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {isReducersInit} = useReducerManager(initialReducers);

  const onSubmit = useCallback(async (evt: FormEvent) => {
    evt.preventDefault();
    const result = await dispatch(login());
    if (result.meta.requestStatus === 'fulfilled') {
      const user = result.payload;

      localStorage.setItem(STORAGE_KEYS.USER_KEY, JSON.stringify(user));
      onClose?.();
    }
  }, [dispatch, onClose]);

  const onLoginChange = useCallback((str: string) => {
    dispatch(authenticationActions.setUsername(str));
  }, [dispatch]);

  const onPasswordChange = useCallback((str: string) => {
    dispatch(authenticationActions.setPassword(str));
  }, [dispatch]);

  if (!isReducersInit) {
    return null;
  }

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

export default LoginForm;