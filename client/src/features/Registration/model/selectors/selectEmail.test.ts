import {StateSchema} from 'app/providers/StoreProvider';
import {selectEmail} from './selectEmail';

describe('selectEmail.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        email: '123123',
      },
    };
    expect(selectEmail(state as StateSchema)).toBe('123123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectEmail(state as StateSchema)).toEqual('');
  });
});
