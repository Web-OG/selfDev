import {postRegistration} from './postRegistration';
import {TestAsyncThunk} from 'shared/lib/components/testing/TestAsyncThunk';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import {selectUsername} from 'features/Registration/model/selectors/selectUsername';
import {StateSchema} from 'app/providers/StoreProvider';
import {selectEmail} from 'features/Registration/model/selectors/selectEmail';
import {selectPassword} from 'features/Registration/model/selectors/selectPassword';

describe('postRegistration.test', () => {
  test('success postRegistration', async () => {
    const state: DeepPartial<StateSchema> = {
      userRegistration: {
        username: 'username',
        email: 'mail@example.com',
        password: '123456'
      },
    };
    const successMsg = {message: 'success user registration'};

    const thunk = new TestAsyncThunk(postRegistration, state);
    thunk.api.post.mockReturnValue(Promise.resolve({status: 200, data: successMsg}));
    const result = await thunk.callThunk(undefined);

    expect(selectUsername(thunk.getState())).toBe('username');
    expect(selectEmail(thunk.getState())).toBe('mail@example.com');
    expect(selectPassword(thunk.getState())).toBe('123456');
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
    const thunk = new TestAsyncThunk(postRegistration);
    thunk.api.post.mockReturnValue(Promise.reject({status: 404}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(defaultFormSendingErrorMsg);
  });
});
