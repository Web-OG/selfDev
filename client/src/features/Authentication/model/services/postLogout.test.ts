import {userActions} from '@/entities/User';
import {postLogout} from './postLogout';
import {TestAsyncThunk} from '@/shared/lib/components/testing/TestAsyncThunk';
import {defaultFormSendingErrorMsg} from '@/shared/lib/messages';

describe('postLogout.test', () => {
  it('success postLogout', async () => {

    const thunk = new TestAsyncThunk(postLogout);
    thunk.api.post.mockReturnValue(Promise.resolve({status: 200}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.logout());
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(undefined);
  });

  it('error postLogout', async () => {
    const thunk = new TestAsyncThunk(postLogout);
    thunk.api.post.mockReturnValue(Promise.reject({status: 400}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.api.post).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.arg).toBe(undefined);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(defaultFormSendingErrorMsg);
    expect(result.type).toBe('Authentication/postLogout/rejected');
  });
});
