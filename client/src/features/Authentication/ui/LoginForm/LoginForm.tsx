import {FormEvent, memo, useCallback} from 'react';
import cls from './LoginForm.module.scss';
import classNames from 'classnames';
import {Input} from 'shared/ui/Input';
import {ButtonSubmit} from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {postLogin} from '../../model/services/postLogin';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {authenticationActions, authenticationReducer} from '../../model/slices/authenticationSlice';
import {useSelector} from 'react-redux';
import {selectUsername} from '../../model/selectors/selectUsername';
import {selectPassword} from '../../model/selectors/selectPassword';
import {StorageDispatcher} from 'shared/lib/services/StorageService';
import {RegistrationInvite} from 'features/Registration';
import {selectIsSending} from '../../model/selectors/selectIsSending';
import {selectErrorMsg} from '../../model/selectors/selectErrorMsg';
import {getCurrentLanguage} from 'shared/lib/utils/getCurrentLanguage';
import {selectErrorFields} from '../../model/selectors/selectErrorFields';
import {AlertSendingError} from 'shared/lib/components/form/AlertSendingError';

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
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const isSending = useSelector(selectIsSending);
  const sendingErrorMsg = useSelector(selectErrorMsg);
  const sendingErrorFields = useSelector(selectErrorFields);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {isReducersInit} = useReducerManager(initialReducers);
  const currentLanguage = getCurrentLanguage();

  const onSubmit = useCallback(async (evt: FormEvent) => {
    evt.preventDefault();
    const result = await dispatch(postLogin());
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
      {sendingErrorMsg && <AlertSendingError sendingErrorMsg={sendingErrorMsg}/>}
      <ButtonSubmit className={cls.button} isSending={isSending}>{t('Войти')}</ButtonSubmit>
      <RegistrationInvite onExternalClose={onClose}/>
    </form>
  );
});

export default LoginForm;