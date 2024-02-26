import {StateSchema} from 'app/providers/StoreProvider';
import {selectReadonly} from './selectReadonly';

describe('selectReadonly.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      },
    };
    expect(selectReadonly(state as StateSchema)).toBe(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectReadonly(state as StateSchema)).toEqual(false);
  });
});
