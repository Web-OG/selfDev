import {StateSchema} from '@/app/providers/StoreProvider';
import {selectUsername} from './selectUsername';

describe('selectUsername.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        username: 'username',
      },
    };
    expect(selectUsername(state as StateSchema)).toBe('username');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectUsername(state as StateSchema)).toBe('');
  });
});
