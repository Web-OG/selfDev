import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/providers/StoreProvider';
import {
  selectHasMore,
  selectIsLoading,
  selectCurrentPage,
} from '../../selectors';
import {postListActions} from '../../slices/postListSlice';
import {getPostList} from '../getPostList/getPostList';

export const getPostListNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'postList/getPostListNextPage',
  async (_, thunkApi) => {
    const {getState, dispatch} = thunkApi;
    const hasMore = selectHasMore(getState());
    const page = selectCurrentPage(getState());
    const isLoading = selectIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(postListActions.setPage(page + 1));
      dispatch(getPostList({
        page: page + 1,
      }));
    }
  },
);
