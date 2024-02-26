import {StateSchema} from 'app/providers/StoreProvider';
import {selectErrorFields} from './selectErrorFields';

describe('selectErrorFields.test', () => {
  test('should return error', () => {
    const error = {username: {ru: 'Неверный формат', en: 'Incorrect format'}};
    const state: DeepPartial<StateSchema> = {
      authentication: {
        sendingErrorFields: error,
      },
    };
    expect(selectErrorFields(state as StateSchema)).toEqual(error);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectErrorFields(state as StateSchema)).toEqual(undefined);
  });
});
