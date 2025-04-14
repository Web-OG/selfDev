import {StateSchema} from '@/app/providers/StoreProvider';
import {selectSendingErrorMsg} from './selectSendingErrorMsg';
import {defaultFormSendingErrorMsg} from '@/shared/lib/messages';

describe('selectSendingErrorMsg.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        sendingErrorMsg: defaultFormSendingErrorMsg.message,
      },
    };
    expect(selectSendingErrorMsg(state as StateSchema)).toEqual(defaultFormSendingErrorMsg.message);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectSendingErrorMsg(state as StateSchema)).toBe(undefined);
  });
});
