import {UserSchema} from '../types/user';
import {userReducer, userActions} from './userSlice';

describe('userSlice.test', () => {
  test('set authData', () => {
    const mockUser = {
      id: '1',
      username: 'Gendalf'
    };

    const state: DeepPartial<UserSchema> = {authData: undefined};
    expect(userReducer(
      state as UserSchema,
      userActions.setAuthData(mockUser),
    )).toEqual({authData: mockUser});
  });

  test('init authData with user payload', () => {
    const mockUser = {
      id: '1',
      username: 'Gendalf'
    };

    const state: DeepPartial<UserSchema> = {_initialized: false};
    expect(userReducer(
      state as UserSchema,
      userActions.initAuthData(mockUser),
    )).toEqual({authData: mockUser, _initialized: true});
  });

  test('init authData without user payload', () => {
    const mockUser = null;

    const state: DeepPartial<UserSchema> = {_initialized: false};
    expect(userReducer(
      state as UserSchema,
      userActions.initAuthData(mockUser),
    )).toEqual({_initialized: true});
  });

  test('logout', () => {
    const state: DeepPartial<UserSchema> = {
      _initialized: true,
      authData: {
        id: '1',
        username: 'Gendalf'
      }
    };

    expect(userReducer(
      state as UserSchema,
      userActions.logout(),
    )).toEqual({
      _initialized: true,
      authData: undefined
    });
  });
});
