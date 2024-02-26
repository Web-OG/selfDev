import {StateSchema} from 'app/providers/StoreProvider';
import {selectAvatar} from './selectAvatar';

describe('selectAvatar.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {avatar: 'test'},
      },
    };
    expect(selectAvatar(state as StateSchema)).toBe('test');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectAvatar(state as StateSchema)).toBe('');
  });
});
