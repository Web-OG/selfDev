import {memo, useCallback, useEffect} from 'react';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {useSelector} from 'react-redux';
import {ProfileCard} from 'entities/Profile';
import {useParams} from 'react-router-dom';
import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';
import {Controls} from '../../ui/Controls/Controls';
import {profileActions, profileReducer} from '../../model/slice/profileSlice';
import {selectForm} from '../../model/selectors/selectForm';
import {selectIsLoading} from '../../model/selectors/selectIsLoading';
import {selectLoadingError} from '../../model/selectors/selectLoadingError';
import {selectReadonly} from '../../model/selectors/selectReadonly';
import {getProfileData} from '../../model/services/getProfileData';
import {Alert} from 'shared/ui/Alert/Alert';
import {selectAvatar} from '../../model/selectors/selectAvatar';
import {selectSendingErrorMsg} from '../../model/selectors/selectSendingErrorMsg';
import {selectSendingErrorFields} from '../../model/selectors/selectSendingErrorFields';
import {AlertSendingError} from 'shared/lib/components/form/AlertSendingError';
import {Loader} from 'shared/ui/Loader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileProps {
  className?: string;
}

const EditableProfile = memo((props: EditableProfileProps) => {
  const {className} = props;
  const dispatch = useAppDispatch();
  const {isReducersInit} = useReducerManager(initialReducers);
  const form = useSelector(selectForm);
  const avatar = useSelector(selectAvatar);
  const isLoading = useSelector(selectIsLoading);
  const loadingError = useSelector(selectLoadingError);
  const sendingErrorMsg = useSelector(selectSendingErrorMsg);
  const fieldsErrors = useSelector(selectSendingErrorFields);
  const readonly = useSelector(selectReadonly);

  const {id} = useParams<{ id: string }>();

  useEffect(() => {
    if (id && isReducersInit) {
      dispatch(getProfileData(id));
    }
  }, [dispatch, id, isReducersInit]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({firstname: value || ''}));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({lastname: value || ''}));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({city: value || ''}));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({age: Number(value || 0)}));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({username: value || ''}));
  }, [dispatch]);

  const onChangePhone = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({phone: value || ''}));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({avatar: value || ''}));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({currency}));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({country}));
  }, [dispatch]);

  if (!isReducersInit) {
    return null;
  }

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className={className}>
      <Controls/>
      <ProfileCard
        remoteAvatar={avatar}
        avatar={form?.avatar || ''}
        city={form?.city || ''}
        country={form?.country}
        age={form?.age || 0}
        firstname={form?.firstname || ''}
        phone={form?.phone || ''}
        currency={form?.currency}
        username={form?.username || ''}
        lastname={form?.lastname || ''}
        fieldsErrors={fieldsErrors}
        readonly={readonly}
        onChangeLastname={onChangeLastname}
        onChangeFirstname={onChangeFirstname}
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
        onChangePhone={onChangePhone}
      />
      {loadingError && <Alert severity='error'>Ошибка загрузки данных</Alert>
      }
      {<AlertSendingError sendingErrorMsg={sendingErrorMsg}/>}
    </div>
  );
});

EditableProfile.displayName = 'EditableProfile';
export {EditableProfile};