import {FormEvent, memo, useCallback, useMemo, useState} from 'react';
import {Input} from 'shared/ui/Input';
import {ButtonSubmit} from 'shared/ui/Button';
import {useSelector} from 'react-redux';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {useTranslation} from 'react-i18next';
import {userRegistrationActions, userRegistrationReducer} from '../../model/slices/userRegistrationSlice';
import {selectUsername} from '../../model/selectors/selectUsername';
import {selectPassword} from '../../model/selectors/selectPassword';
import {selectEmail} from '../../model/selectors/selectEmail';
import {isPasswordsNotEquals} from 'shared/lib/utils/isPasswordsNotEquals';
import {Checkbox} from 'shared/ui/Checkbox';
import {postRegistration} from '../../model/services/postRegistration';
import {useNavigate} from 'react-router-dom';
import {selectIsSending} from 'features/Registration/model/selectors/selectIsSending';
import {
  selectSendingErrorMsg
} from 'features/Registration/model/selectors/selectSendingErrorMsg';
import {
  selectSendingErrorFields
} from 'features/Registration/model/selectors/selectSendingErrorFields';
import cls from 'features/Authentication/ui/LoginForm/LoginForm.module.scss';
import {AlertSendingError} from 'shared/lib/components/form/AlertSendingError';

interface Props {
  className?: string
}

const initialReducers: ReducersList = {
  userRegistration: userRegistrationReducer
};

const UserRegistrationForm = memo(({className}: Props) => {
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const email = useSelector(selectEmail);
  const isSending = useSelector(selectIsSending);
  const sendingErrorMsg = useSelector(selectSendingErrorMsg);
  const sendingErrorFields = useSelector(selectSendingErrorFields);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {isReducersInit} = useReducerManager(initialReducers);
  const navigate = useNavigate();

  const onSubmit = useCallback(async (evt: FormEvent) => {
    evt.preventDefault();

    const result = await dispatch(postRegistration());

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
      {sendingErrorMsg && <AlertSendingError sendingErrorMsg={sendingErrorMsg}/>}
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