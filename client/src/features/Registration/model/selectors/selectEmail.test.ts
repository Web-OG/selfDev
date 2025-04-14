import {StateSchema} from '@/app/providers/StoreProvider';
import {selectEmail} from './selectEmail';

describe('selectEmail.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        email: '123123',
      },
    };
    expect(selectEmail(state as StateSchema)).toBe('123123');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectEmail(state as StateSchema)).toEqual('');
  });
});
