import {StateSchema} from 'app/providers/StoreProvider';
import {getUserRegistrationIsSending} from './getUserRegistrationIsSending';

describe('getUserRegistrationIsSending.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        isSending: true
      },
    };
    expect(getUserRegistrationIsSending(state as StateSchema)).toBe(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserRegistrationIsSending(state as StateSchema)).toBe(false);
  });
});
