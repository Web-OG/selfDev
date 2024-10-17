import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {selectLimit} from '../../selectors';
import {PostListWithPagination} from 'widgets/InfinityPostList/model/types/infinityPostListSchema';

interface Props {
  page?: number;
}

export const getPostList = createAsyncThunk<
  PostListWithPagination,
  Props,
  ThunkConfig<string>
>(
  'postList/getPostList',
  async (props, thunkApi) => {
    const {extra, rejectWithValue, getState} = thunkApi;
    const {page = 1} = props;
    const limit = selectLimit(getState());

    try {
      const response = await extra.api.get<PostListWithPagination>('/api/posts', {
        params: {
          limit,
          page,
        },
      });

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
