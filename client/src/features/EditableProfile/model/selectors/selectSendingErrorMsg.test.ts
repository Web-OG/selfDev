import {StateSchema} from 'app/providers/StoreProvider';
import {selectSendingErrorMsg} from './selectSendingErrorMsg';

describe('selectSendingErrorMsg.test', () => {
  test('should return value', () => {
    const error = {ru: 'test', en: 'test'};
    const state: DeepPartial<StateSchema> = {
      profile: {
        sendingErrorMsg: error
      },
    };
    expect(selectSendingErrorMsg(state as StateSchema)).toEqual(error);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectSendingErrorMsg(state as StateSchema)).toEqual(undefined);
  });
});
