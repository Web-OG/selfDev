import {StateSchema} from '@/app/providers/StoreProvider';
import {selectSendingErrorMsg} from './selectSendingErrorMsg';

describe('selectSendingErrorMsg.test', () => {
  it('should return value', () => {
    const error = {ru: 'test', en: 'test'};
    const state: DeepPartial<StateSchema> = {
      profile: {
        sendingErrorMsg: error
      },
    };
    expect(selectSendingErrorMsg(state as StateSchema)).toEqual(error);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectSendingErrorMsg(state as StateSchema)).toEqual(undefined);
  });
});
