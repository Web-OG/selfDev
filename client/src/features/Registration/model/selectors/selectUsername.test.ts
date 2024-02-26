import {StateSchema} from 'app/providers/StoreProvider';
import {selectUsername} from './selectUsername';

describe('selectUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        username: 'username',
      },
    };
    expect(selectUsername(state as StateSchema)).toBe('username');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectUsername(state as StateSchema)).toBe('');
  });
});
