import {userActions} from 'entities/User';
import {logout} from './logout';
import {TestAsyncThunk} from 'shared/lib/components/testing/TestAsyncThunk';

describe('logout.test', () => {
  test('success logout', async () => {

    const thunk = new TestAsyncThunk(logout);
    thunk.api.post.mockReturnValue(Promise.resolve({status: 200}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.logout());
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(undefined);
  });

  test('error logout', async () => {
    const thunk = new TestAsyncThunk(logout);
    thunk.api.post.mockReturnValue(Promise.reject({status: 400}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.arg).toBe(undefined);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
    expect(result.type).toBe('Authentication/logout/rejected');
  });
});