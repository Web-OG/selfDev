import {StateSchema} from 'app/providers/StoreProvider';
import {getUserRegistrationEmail} from './getUserRegistrationEmail';

describe('getUserRegistrationEmail.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        email: '123123',
      },
    };
    expect(getUserRegistrationEmail(state as StateSchema)).toBe('123123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserRegistrationEmail(state as StateSchema)).toEqual('');
  });
});
