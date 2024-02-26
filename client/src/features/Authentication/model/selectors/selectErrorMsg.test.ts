import {StateSchema} from 'app/providers/StoreProvider';
import {selectErrorMsg} from './selectErrorMsg';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';

describe('selectErrorMsg.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        sendingErrorMsg: defaultFormSendingErrorMsg.message,
      },
    };
    expect(selectErrorMsg(state as StateSchema)).toEqual(defaultFormSendingErrorMsg.message);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectErrorMsg(state as StateSchema)).toEqual(undefined);
  });
});
