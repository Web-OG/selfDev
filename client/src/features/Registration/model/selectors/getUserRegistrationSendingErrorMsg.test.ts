import {StateSchema} from 'app/providers/StoreProvider';
import {getUserRegistrationSendingErrorMsg} from './getUserRegistrationSendingErrorMsg';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';

describe('getUserRegistrationSendingErrorMsg.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        sendingErrorMsg: defaultFormSendingErrorMsg.message,
      },
    };
    expect(getUserRegistrationSendingErrorMsg(state as StateSchema)).toEqual(defaultFormSendingErrorMsg.message);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserRegistrationSendingErrorMsg(state as StateSchema)).toBe(undefined);
  });
});
