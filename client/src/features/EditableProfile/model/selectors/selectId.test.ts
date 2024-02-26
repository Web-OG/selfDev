import {StateSchema} from 'app/providers/StoreProvider';
import {selectId} from './selectId';

describe('selectId.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {_id: '123456'},
      },
    };
    expect(selectId(state as StateSchema)).toBe('123456');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectId(state as StateSchema)).toEqual(undefined);
  });
});
