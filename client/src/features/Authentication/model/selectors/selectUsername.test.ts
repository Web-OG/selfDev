import {StateSchema} from 'app/providers/StoreProvider';
import {selectUsername} from './selectUsername';

describe('selectUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        username: '123123',
      },
    };
    expect(selectUsername(state as StateSchema)).toEqual('123123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectUsername(state as StateSchema)).toEqual('');
  });
});
