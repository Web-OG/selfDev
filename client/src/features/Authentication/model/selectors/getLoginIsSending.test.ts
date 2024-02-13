import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginIsSending} from './getLoginIsSending';

describe('getLoginIsSending.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        isSending: true,
      },
    };
    expect(getLoginIsSending(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        isSending: false,
      },
    };
    expect(getLoginIsSending(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsSending(state as StateSchema)).toEqual(false);
  });
});
