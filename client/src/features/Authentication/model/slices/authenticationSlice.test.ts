import {AuthenticationFields, AuthenticationSchema} from '../types/authenticationSchema';
import {authenticationActions, authenticationReducer} from './authenticationSlice';
import {postLogin} from 'features/Authentication/model/services/postLogin';
import {User} from 'entities/User';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import {ServerBadRequestResponse} from 'shared/lib/types';

describe('authenticationSlice.test', () => {
  it('test set username', () => {
    const state: DeepPartial<AuthenticationSchema> = {username: '123'};
    expect(authenticationReducer(
      state as AuthenticationSchema,
      authenticationActions.setUsername('123123'),
    )).toEqual({username: '123123'});
  });

  it('test set password', () => {
    const state: DeepPartial<AuthenticationSchema> = {password: '123'};
    expect(authenticationReducer(
      state as AuthenticationSchema,
      authenticationActions.setPassword('123123'),
    )).toEqual({password: '123123'});
  });

  it('test login pending', () => {
    const state: DeepPartial<AuthenticationSchema> = {
      isSending: false,
      sendingErrorMsg: defaultFormSendingErrorMsg.message
    };

    expect(authenticationReducer(
      state as AuthenticationSchema,
      postLogin.pending('', undefined, undefined)
    )).toEqual({
      isSending: true,
      sendingErrorMsg: undefined,
    });
  });

  it('test login fulfilled', () => {
    const state: DeepPartial<AuthenticationSchema> = {
      isSending: true,
    };
    const responseUser: User = {
      username: 'Test',
      id: '1D45E01E'
    };

    expect(authenticationReducer(
      state as AuthenticationSchema,
      postLogin.fulfilled(responseUser, '', undefined)
    )).toEqual({
      isSending: false,
    });
  });

  it('test login rejected', () => {
    const state: DeepPartial<AuthenticationSchema> = {
      isSending: true,
    };

    expect(authenticationReducer(
      state as AuthenticationSchema,
      postLogin.rejected(new Error(), '', undefined, defaultFormSendingErrorMsg)
    )).toEqual({
      isSending: false,
      sendingErrorMsg: defaultFormSendingErrorMsg.message,
    });
  });

  it('test login rejected with validation errors', () => {
    const state: DeepPartial<AuthenticationSchema> = {
      isSending: true,
    };

    const responseError: ServerBadRequestResponse<keyof AuthenticationFields> = {
      message: {en: 'error', ru: 'error'},
      errors: [{path: 'username', msg: {en: 'error', ru: 'error'}, type: 'field', location: 'body', value: 'err'}]
    };

    expect(authenticationReducer(
      state as AuthenticationSchema,
      postLogin.rejected(new Error(), '', undefined, responseError)
    )).toEqual({
      isSending: false,
      sendingErrorMsg: responseError.message,
      sendingErrorFields: {'username': {en: 'error', ru: 'error'}}
    });
  });
});
