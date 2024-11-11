import {ProfileSchema} from '../types/profile';
import {profileActions, profileReducer} from './profileSlice';
import {defaultFormSendingErrorMsg, defaultLoadingErrorMsg} from 'shared/lib/messages';
import {ServerBadRequestResponse} from 'shared/lib/types';
import {putProfileData} from '../services/putProfileData';
import {Profile} from 'entities/Profile';
import {getProfileData} from '../services/getProfileData';

describe('profileSlice.test', () => {
  it('test set value', () => {
    const state: DeepPartial<ProfileSchema> = {form: {}};
    const payload = {username: '123123'};

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile(payload),
    )).toEqual({form: payload});
  });

  it('test set a value with existing values', () => {
    const state: DeepPartial<ProfileSchema> = {form: {city: 'Moscow'}};
    const payload = {username: '123123'};

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile(payload),
    )).toEqual({form: {city: 'Moscow', username: '123123'}});
  });

  it('test getProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      loadingError: defaultLoadingErrorMsg
    };

    expect(profileReducer(
      state as ProfileSchema,
      getProfileData.pending('', '123', undefined)
    )).toEqual({
      isLoading: true,
      loadingError: undefined,
    });
  });

  it('test getProfileData fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    const responseProfile: DeepPartial<Profile> = {
      username: 'Test',
      age: 18
    };

    expect(profileReducer(
      state as ProfileSchema,
      getProfileData.fulfilled(responseProfile, '', '')
    )).toEqual({
      data: {
        username: 'Test',
        age: 18
      },
      form: {
        username: 'Test',
        age: 18
      },
      isLoading: false,
    });
  });

  it('test getProfileData rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      getProfileData.rejected(new Error(), '', '', defaultLoadingErrorMsg)
    )).toEqual({
      isLoading: false,
      loadingError: defaultLoadingErrorMsg,
    });
  });

  it('test putProfile pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isSending: false,
      sendingErrorMsg: defaultFormSendingErrorMsg.message
    };

    expect(profileReducer(
      state as ProfileSchema,
      putProfileData.pending('', undefined, undefined)
    )).toEqual({
      isSending: true,
      sendingErrorMsg: undefined,
    });
  });

  it('test putProfile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isSending: true,
    };
    const responseProfile: DeepPartial<Profile> = {
      username: 'Test',
      age: 18
    };

    expect(profileReducer(
      state as ProfileSchema,
      putProfileData.fulfilled(responseProfile, '', undefined)
    )).toEqual({
      data: {
        username: 'Test',
        age: 18
      },
      form: {
        username: 'Test',
        age: 18
      },
      isSending: false,
      readonly: true,
      sendingErrorFields: undefined,
      sendingErrorMsg: undefined,
    });
  });

  it('test putProfile rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isSending: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      putProfileData.rejected(new Error(), '', undefined, defaultFormSendingErrorMsg)
    )).toEqual({
      isSending: false,
      sendingErrorMsg: defaultFormSendingErrorMsg.message,
    });
  });

  it('test putProfile rejected with validation errors', () => {
    const state: DeepPartial<ProfileSchema> = {
      isSending: true,
    };

    const responseError: ServerBadRequestResponse<keyof Profile> = {
      message: {en: 'error', ru: 'error'},
      errors: [{path: 'username', msg: {en: 'error', ru: 'error'}, type: 'field', location: 'body', value: 'err'}]
    };

    expect(profileReducer(
      state as ProfileSchema,
      putProfileData.rejected(new Error(), '', undefined, responseError)
    )).toEqual({
      isSending: false,
      sendingErrorMsg: responseError.message,
      sendingErrorFields: {'username': {en: 'error', ru: 'error'}}
    });
  });
});
