import {StateSchema} from 'app/providers/StoreProvider';
import {selectIsLoading} from './selectIsLoading';

describe('selectIsLoading.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      },
    };
    expect(selectIsLoading(state as StateSchema)).toBe(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectIsLoading(state as StateSchema)).toEqual(false);
  });
});
