import {userRegistration} from './userRegistration';
import {TestAsyncThunk} from 'shared/lib/components/testing/TestAsyncThunk';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import {getUserRegistrationUsername} from 'features/Registration/model/selectors/getUserRegistrationUsername';
import {StateSchema} from 'app/providers/StoreProvider';
import {getUserRegistrationEmail} from 'features/Registration/model/selectors/getUserRegistrationEmail';
import {getUserRegistrationPassword} from 'features/Registration/model/selectors/getUserRegistrationPassword';

describe('userRegistration.test', () => {
  test('success userRegistration', async () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        username: 'username',
        email: 'mail@example.com',
        password: '123456'
      },
    };
    const successMsg = {message: 'success user registration'};

    const thunk = new TestAsyncThunk(userRegistration, state);
    thunk.api.post.mockReturnValue(Promise.resolve({status: 200, data: successMsg}));
    const result = await thunk.callThunk(undefined);

    expect(getUserRegistrationUsername(thunk.getState())).toBe('username');
    expect(getUserRegistrationEmail(thunk.getState())).toBe('mail@example.com');
    expect(getUserRegistrationPassword(thunk.getState())).toBe('123456');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalledWith(
      '/user/registration',
      {
        username: 'username',
        email: 'mail@example.com',
        password: '123456'
      });
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(successMsg);
  });

  test('error userRegistration', async () => {
    const thunk = new TestAsyncThunk(userRegistration);
    thunk.api.post.mockReturnValue(Promise.reject({status: 404}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(defaultFormSendingErrorMsg);
  });
});
