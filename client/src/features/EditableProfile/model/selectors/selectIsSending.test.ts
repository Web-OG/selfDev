import {StateSchema} from 'app/providers/StoreProvider';
import {selectIsSending} from './selectIsSending';

describe('selectIsSending.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isSending: true
      },
    };
    expect(selectIsSending(state as StateSchema)).toBe(true);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectIsSending(state as StateSchema)).toEqual(false);
  });
});
