import {StateSchema} from 'app/providers/StoreProvider';
import {selectIsSending} from './selectIsSending';

describe('selectIsSending.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        isSending: true,
      },
    };
    expect(selectIsSending(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        isSending: false,
      },
    };
    expect(selectIsSending(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectIsSending(state as StateSchema)).toEqual(false);
  });
});
