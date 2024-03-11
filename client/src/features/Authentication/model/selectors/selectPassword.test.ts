import {StateSchema} from 'app/providers/StoreProvider';
import {selectPassword} from './selectPassword';

describe('selectPassword.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      authentication: {
        password: '123123',
      },
    };
    expect(selectPassword(state as StateSchema)).toEqual('123123');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectPassword(state as StateSchema)).toEqual('');
  });
});
