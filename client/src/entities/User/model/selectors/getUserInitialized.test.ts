import {getUserInitialized} from '@/entities/User';
import type {StateSchema} from '@/app/providers/StoreProvider';

describe('getUserInitialized.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _initialized: false
      }
    };
    expect(getUserInitialized(state as StateSchema)).toBe(false);
  });
});
