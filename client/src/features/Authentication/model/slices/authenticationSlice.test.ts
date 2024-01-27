import {AuthenticationSchema} from '../types/authenticationSchema';
import {authenticationActions, authenticationReducer} from './authenticationSlice';

describe('authenticationSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<AuthenticationSchema> = {username: '123'};
    expect(authenticationReducer(
      state as AuthenticationSchema,
      authenticationActions.setUsername('123123'),
    )).toEqual({username: '123123'});
  });

  test('test set password', () => {
    const state: DeepPartial<AuthenticationSchema> = {password: '123'};
    expect(authenticationReducer(
      state as AuthenticationSchema,
      authenticationActions.setPassword('123123'),
    )).toEqual({password: '123123'});
  });
});
