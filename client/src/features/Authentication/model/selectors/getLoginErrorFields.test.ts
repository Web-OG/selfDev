import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginErrorFields} from './getLoginErrorFields';

describe('getLoginErrorFields.test', () => {
  test('should return error', () => {
    const error = {username: {ru: 'Неверный формат', en: 'Incorrect format'}};
    const state: DeepPartial<StateSchema> = {
      authentication: {
        sendingErrorFields: error,
      },
    };
    expect(getLoginErrorFields(state as StateSchema)).toEqual(error);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginErrorFields(state as StateSchema)).toEqual(undefined);
  });
});
