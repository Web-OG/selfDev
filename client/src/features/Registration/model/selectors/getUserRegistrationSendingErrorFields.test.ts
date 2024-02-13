import {StateSchema} from 'app/providers/StoreProvider';
import {getUserRegistrationSendingErrorFields} from './getUserRegistrationSendingErrorFields';

describe('getUserRegistrationSendingErrorFields.test', () => {
  test('should return value', () => {
    const error = {username: {ru: 'Неверный формат', en: 'Incorrect format'}};
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        sendingErrorFields: error,
      },
    };
    expect(getUserRegistrationSendingErrorFields(state as StateSchema)).toEqual(error);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserRegistrationSendingErrorFields(state as StateSchema)).toBe(undefined);
  });
});
