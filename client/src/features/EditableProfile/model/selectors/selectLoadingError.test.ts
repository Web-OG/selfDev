import {StateSchema} from '@/app/providers/StoreProvider';
import {selectLoadingError} from './selectLoadingError';

describe('selectLoadingError.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        loadingError: {ru: 'test', en: 'test'}
      },
    };
    expect(selectLoadingError(state as StateSchema)).toEqual({ru: 'test', en: 'test'});
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoadingError(state as StateSchema)).toEqual(undefined);
  });
});
