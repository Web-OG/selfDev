import {FormEvent, memo, useCallback, useMemo} from 'react';
import cls from './LoginForm.module.scss';
import classNames from 'classnames';
import {Input} from 'shared/ui/Input';
import {ButtonSubmit} from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {login} from '../../model/services/login/login';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {authenticationActions, authenticationReducer} from '../../model/slices/authenticationSlice';
import {useSelector} from 'react-redux';
import {getLoginUsername} from '../../model/selectors/getLoginUsername';
import {getLoginPassword} from '../../model/selectors/getLoginPassword';
import {StorageDispatcher} from 'shared/lib/services/StorageService';
import {RegistrationInvite} from 'features/Registration';
import {getLoginIsSending} from '../../model/selectors/getLoginIsSending';
import {getLoginErrorMsg} from '../../model/selectors/getLoginErrorMsg';
import {Alert} from 'shared/ui/Alert/Alert';
import {getCurrentLanguage} from 'shared/lib/utils/getCurrentLanguage';
import {getLoginErrorFields} from '../../model/selectors/getLoginErrorFields';

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
  const isSending = useSelector(getLoginIsSending);
  const sendingErrorMsg = useSelector(getLoginErrorMsg);
  const sendingErrorFields = useSelector(getLoginErrorFields);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {isReducersInit} = useReducerManager(initialReducers);
  const currentLanguage = getCurrentLanguage();

  const onSubmit = useCallback(async (evt: FormEvent) => {
    evt.preventDefault();
    const result = await dispatch(login());
    if (result.meta.requestStatus === 'fulfilled') {
      const user = result.payload;

      StorageDispatcher.setItem('user', user);
      onClose?.();
    }
  }, [dispatch, onClose]);

  const onLoginChange = useCallback((str: string) => {
    dispatch(authenticationActions.setUsername(str));
  }, [dispatch]);

  const onPasswordChange = useCallback((str: string) => {
    dispatch(authenticationActions.setPassword(str));
  }, [dispatch]);

  const SendingErrorAlert = useMemo(() => {
    if (!sendingErrorMsg) return null;

    return <Alert severity='error' title={t('Ошибка отправки формы')}>{sendingErrorMsg[currentLanguage]}</Alert>;
  }, [currentLanguage, sendingErrorMsg, t]);

  if (!isReducersInit) {
    return null;
  }

  return (
    <form onSubmit={onSubmit} className={classNames(cls.form, {[cls.formFixed]: fixed}, className)}>
      <Input
        placeholder={'example@mail.com'}
        label={t('Логин')}
        value={username}
        onChange={onLoginChange}
        externalError={sendingErrorFields?.username}
        validations={['username']}
        currentLanguage={currentLanguage}
        required
      />
      <Input
        placeholder={'*****'}
        label={t('Пароль')}
        value={password}
        onChange={onPasswordChange}
        externalError={sendingErrorFields?.password}
        currentLanguage={currentLanguage}
        required
      />
      {sendingErrorMsg && SendingErrorAlert}
      <ButtonSubmit className={cls.button} isSending={isSending}>{t('Войти')}</ButtonSubmit>
      <RegistrationInvite onExternalClose={onClose}/>
    </form>
  );
});

export default LoginForm;