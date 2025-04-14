import {StateSchema} from '@/app/providers/StoreProvider';
import {selectSendingErrorFields} from './selectSendingErrorFields';

describe('selectSendingErrorFields.test', () => {
  it('should return value', () => {
    const error = {username: {ru: 'Неверный формат', en: 'Incorrect format'}};
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        sendingErrorFields: error,
      },
    };
    expect(selectSendingErrorFields(state as StateSchema)).toEqual(error);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectSendingErrorFields(state as StateSchema)).toBe(undefined);
  });
});
