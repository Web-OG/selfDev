import {getPostListNextPage} from './getPostListNextPage';
import {getPostList} from '../getPostList/getPostList';
import {TestAsyncThunk} from '@/shared/lib/components/testing/TestAsyncThunk';

jest.mock('widgets/InfinityPostList/model/services/getPostList/getPostList');

describe('getPostListNextPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(getPostListNextPage, {
      postList: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(getPostList).toHaveBeenCalledWith({page: 3});
  });
  test('getPostListNextPage not called', async () => {
    const thunk = new TestAsyncThunk(getPostListNextPage, {
      postList: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(getPostList).not.toHaveBeenCalled();
  });
});
