import {UserRegistrationFields, UserRegistrationSchema} from '../types/userRegistrationSchema';
import {userRegistrationActions, userRegistrationReducer} from './userRegistrationSlice';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import {userRegistration} from '../services/userRegistration';
import {ServerBadRequestResponse} from 'shared/types';

describe('userRegistrationSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<UserRegistrationSchema> = {username: '123'};
    expect(userRegistrationReducer(
      state as UserRegistrationSchema,
      userRegistrationActions.setUsername('123123'),
    )).toEqual({username: '123123'});
  });

  test('test set email', () => {
    const state: DeepPartial<UserRegistrationSchema> = {email: 'mail@example.com'};
    expect(userRegistrationReducer(
      state as UserRegistrationSchema,
      userRegistrationActions.setEmail('mail@example.com'),
    )).toEqual({email: 'mail@example.com'});
  });

  test('test set password', () => {
    const state: DeepPartial<UserRegistrationSchema> = {password: '123'};
    expect(userRegistrationReducer(
      state as UserRegistrationSchema,
      userRegistrationActions.setPassword('123123'),
    )).toEqual({password: '123123'});
  });

  test('test userRegistration pending', () => {
    const state: DeepPartial<UserRegistrationSchema> = {
      isSending: false,
      sendingErrorMsg: defaultFormSendingErrorMsg.message
    };

    expect(userRegistrationReducer(
      state as UserRegistrationSchema,
      userRegistration.pending('', undefined, undefined)
    )).toEqual({
      isSending: true,
      sendingErrorMsg: undefined,
    });
  });

  test('test userRegistration fulfilled', () => {
    const state: DeepPartial<UserRegistrationSchema> = {
      isSending: true,
    };

    const massage = {
      message: 'success registration'
    };

    expect(userRegistrationReducer(
      state as UserRegistrationSchema,
      userRegistration.fulfilled(massage, '', undefined)
    )).toEqual({
      isSending: false,
    });
  });

  test('test userRegistration rejected', () => {
    const state: DeepPartial<UserRegistrationSchema> = {
      isSending: true,
    };

    expect(userRegistrationReducer(
      state as UserRegistrationSchema,
      userRegistration.rejected(new Error(), '', undefined, defaultFormSendingErrorMsg)
    )).toEqual({
      isSending: false,
      sendingErrorMsg: defaultFormSendingErrorMsg.message,
    });
  });

  test('test userRegistration rejected with validation errors', () => {
    const state: DeepPartial<UserRegistrationSchema> = {
      isSending: true,
    };

    const responseError: ServerBadRequestResponse<keyof UserRegistrationFields> = {
      message: {en: 'error', ru: 'error'},
      errors: [{path: 'username', msg: {en: 'error', ru: 'error'}, type: 'field', location: 'body', value: 'err'}]
    };

    expect(userRegistrationReducer(
      state as UserRegistrationSchema,
      userRegistration.rejected(new Error(), '', undefined, responseError)
    )).toEqual({
      isSending: false,
      sendingErrorMsg: responseError.message,
      sendingErrorFields: {'username': {en: 'error', ru: 'error'}}
    });
  });
});
