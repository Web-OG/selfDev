import {FormEvent, memo, useCallback, useMemo, useState} from 'react';
import {Input} from 'shared/ui/Input';
import {ButtonSubmit} from 'shared/ui/Button';
import {useSelector} from 'react-redux';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {useTranslation} from 'react-i18next';
import {userRegistrationActions, userRegistrationReducer} from '../../model/slices/userRegistrationSlice';
import {getUserRegistrationUsername} from '../../model/selectors/getUserRegistrationUsername';
import {getUserRegistrationPassword} from '../../model/selectors/getUserRegistrationPassword';
import {getUserRegistrationEmail} from '../../model/selectors/getUserRegistrationEmail';
import {isPasswordsNotEquals} from 'shared/lib/utils/isPasswordsNotEquals';
import {Checkbox} from 'shared/ui/Checkbox';
import {userRegistration} from '../../model/services/userRegistration';
import {useNavigate} from 'react-router-dom';
import {Alert} from 'shared/ui/Alert/Alert';
import {getCurrentLanguage} from 'shared/lib/utils/getCurrentLanguage';
import {getUserRegistrationIsSending} from 'features/Registration/model/selectors/getUserRegistrationIsSending';
import {
  getUserRegistrationSendingErrorMsg
} from 'features/Registration/model/selectors/getUserRegistrationSendingErrorMsg';
import {
  getUserRegistrationSendingErrorFields
} from 'features/Registration/model/selectors/getUserRegistrationSendingErrorFields';
import cls from 'features/Authentication/ui/LoginForm/LoginForm.module.scss';

interface Props {
  className?: string
}

const initialReducers: ReducersList = {
  userRegistration: userRegistrationReducer
};

const UserRegistrationForm = memo(({className}: Props) => {
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const username = useSelector(getUserRegistrationUsername);
  const password = useSelector(getUserRegistrationPassword);
  const email = useSelector(getUserRegistrationEmail);
  const isSending = useSelector(getUserRegistrationIsSending);
  const sendingErrorMsg = useSelector(getUserRegistrationSendingErrorMsg);
  const sendingErrorFields = useSelector(getUserRegistrationSendingErrorFields);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {isReducersInit} = useReducerManager(initialReducers);
  const navigate = useNavigate();
  const currentLanguage = getCurrentLanguage();

  const onSubmit = useCallback(async (evt: FormEvent) => {
    evt.preventDefault();

    const result = await dispatch(userRegistration());

    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/registration_success', {state: {email}});
    }
  }, [dispatch, navigate, email]);

  const onLoginChange = useCallback((str: string) => {
    dispatch(userRegistrationActions.setUsername(str));
  }, [dispatch]);

  const onEmailChange = useCallback((str: string) => {
    dispatch(userRegistrationActions.setEmail(str));
  }, [dispatch]);

  const onPasswordChange = useCallback((str: string) => {
    dispatch(userRegistrationActions.setPassword(str));
  }, [dispatch]);

  const onIsAgreeChange = useCallback(() => {
    setIsAgree(prev => !prev);
  }, []);

  const isWrongPasswords = useMemo(() => isPasswordsNotEquals(password, passwordRepeat), [password, passwordRepeat]);

  const passwordsNotEqualsMsg = 'Пароли не совпадают';

  const SendingErrorAlert = useMemo(() => {
    if (!sendingErrorMsg) return null;

    return <Alert severity='error' title={t('Ошибка отправки формы')}>{sendingErrorMsg[currentLanguage]}</Alert>;
  }, [t, currentLanguage, sendingErrorMsg]);

  if (!isReducersInit) {
    return null;
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <Input
        placeholder={'username'}
        label={t('Логин')}
        value={username}
        onChange={onLoginChange}
        externalError={sendingErrorFields?.username}
        validations={['username']}
        required
      />
      <Input
        placeholder={'example@mail.com'}
        label={t('элпочта')} value={email}
        onChange={onEmailChange}
        externalError={sendingErrorFields?.email}
        validations={['email']}
        required
      />
      <Input
        placeholder={'*****'}
        label={t('Пароль')}
        value={password}
        onChange={onPasswordChange}
        externalError={sendingErrorFields?.password}
        validations={['light-password']}
        required
      />
      <Input
        placeholder={'*****'}
        label={t('Повторите пароль')}
        value={passwordRepeat}
        onChange={setPasswordRepeat}
        externalError={isWrongPasswords ? passwordsNotEqualsMsg : undefined}
        required
      />
      <Checkbox
        label={t('Я согласен на обработку персональных данных')}
        name="agree"
        value='lala'
        onChecked={onIsAgreeChange}
        checked={isAgree}
        required={!isAgree}
      />
      {sendingErrorMsg && SendingErrorAlert}
      <ButtonSubmit
        className={cls.button}
        isSending={isSending}
        disabled={isWrongPasswords}
      >
        {t('Зарегистрироваться')}
      </ButtonSubmit>
    </form>
  );
});

UserRegistrationForm.displayName = 'UserRegistrationForm';
export {UserRegistrationForm};