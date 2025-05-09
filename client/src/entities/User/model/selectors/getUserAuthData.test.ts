import {getUserAuthData} from '@/entities/User';
import type {StateSchema} from '@/app/providers/StoreProvider';

describe('getUserAuthData.test', () => {
  const mockUser = {
    id: '1',
    username: 'Gendalf'
  };

  it('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: mockUser
      }
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(mockUser);
  });
  it('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
