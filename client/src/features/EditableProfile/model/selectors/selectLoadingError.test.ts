import {StateSchema} from 'app/providers/StoreProvider';
import {selectLoadingError} from './selectLoadingError';

describe('selectLoadingError.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        loadingError: {ru: 'test', en: 'test'}
      },
    };
    expect(selectLoadingError(state as StateSchema)).toEqual({ru: 'test', en: 'test'});
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoadingError(state as StateSchema)).toEqual(undefined);
  });
});
