import {StateSchema} from '@/app/providers/StoreProvider';
import {selectReadonly} from './selectReadonly';

describe('selectReadonly.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      },
    };
    expect(selectReadonly(state as StateSchema)).toBe(true);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectReadonly(state as StateSchema)).toEqual(false);
  });
});
