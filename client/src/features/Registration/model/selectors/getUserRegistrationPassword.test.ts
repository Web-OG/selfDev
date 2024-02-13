import {StateSchema} from 'app/providers/StoreProvider';
import {getUserRegistrationPassword} from './getUserRegistrationPassword';

describe('getUserRegistrationPassword.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        password: '123123',
      },
    };
    expect(getUserRegistrationPassword(state as StateSchema)).toBe('123123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserRegistrationPassword(state as StateSchema)).toBe('');
  });
});
