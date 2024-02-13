import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginErrorMsg} from './getLoginErrorMsg';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';

describe('getLoginErrorMsg.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        sendingErrorMsg: defaultFormSendingErrorMsg.message,
      },
    };
    expect(getLoginErrorMsg(state as StateSchema)).toEqual(defaultFormSendingErrorMsg.message);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginErrorMsg(state as StateSchema)).toEqual(undefined);
  });
});
