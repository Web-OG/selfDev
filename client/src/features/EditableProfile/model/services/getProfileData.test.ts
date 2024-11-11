import {getProfileData} from './getProfileData';
import {TestAsyncThunk} from 'shared/lib/components/testing/TestAsyncThunk';
import {defaultLoadingErrorMsg} from 'shared/lib/messages';

describe('getProfileData.test', () => {
  it('success getProfileData', async () => {
    const mockValue = {username: '123', id: '1', avatar: 'lal'};
    const thunk = new TestAsyncThunk(getProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({status: 200, data: mockValue}));
    const result = await thunk.callThunk('123');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.api.get).toHaveBeenCalledWith('/api/profile/123');
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockValue);
  });

  it('error getProfileData', async () => {
    const thunk = new TestAsyncThunk(getProfileData);
    thunk.api.get.mockReturnValue(Promise.reject({status: 403, data: defaultLoadingErrorMsg}));
    const result = await thunk.callThunk('123');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.api.get).toHaveBeenCalledWith('/api/profile/123');
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(defaultLoadingErrorMsg);
  });
});
