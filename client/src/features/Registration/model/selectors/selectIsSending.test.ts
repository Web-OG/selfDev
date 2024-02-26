import {StateSchema} from 'app/providers/StoreProvider';
import {selectIsSending} from './selectIsSending';

describe('selectIsSending.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        isSending: true
      },
    };
    expect(selectIsSending(state as StateSchema)).toBe(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectIsSending(state as StateSchema)).toBe(false);
  });
});
