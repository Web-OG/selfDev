import {putProfileData} from './putProfileData';
import {TestAsyncThunk} from 'shared/lib/components/testing/TestAsyncThunk';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';

const initialState = {profile: {form: {username: 'test', _id: '123'}}};

describe('putProfileData.test', () => {
  it('success putProfileData', async () => {
    const thunk = new TestAsyncThunk(putProfileData, initialState);
    thunk.api.put.mockReturnValue(Promise.resolve({status: 200, data: initialState.profile.form}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(thunk.api.put).toHaveBeenCalledWith('/profile/123', initialState.profile.form);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(initialState.profile.form);
  });

  it('error putProfileData', async () => {
    const thunk = new TestAsyncThunk(putProfileData, initialState);
    thunk.api.put.mockReturnValue(Promise.reject({status: 403, data: defaultFormSendingErrorMsg}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(thunk.api.put).toHaveBeenCalledWith('/profile/123', initialState.profile.form);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(defaultFormSendingErrorMsg);
  });
});
