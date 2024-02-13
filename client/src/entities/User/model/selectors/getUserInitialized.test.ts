import {getUserInitialized} from './getUserInitialized';
import type {StateSchema} from 'app/providers/StoreProvider';

describe('getUserInitialized.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _initialized: false
      }
    };
    expect(getUserInitialized(state as StateSchema)).toBe(false);
  });
});
