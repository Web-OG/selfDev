import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Post} from 'entities/Post';
import {selectLimit} from '../../selectors';

interface Props {
  page?: number;
}

export const getPostList = createAsyncThunk<
  Post[],
  Props,
  ThunkConfig<string>
>(
  'postList/getPostList',
  async (props, thunkApi) => {
    const {extra, rejectWithValue, getState} = thunkApi;
    const {page = 1} = props;
    const limit = selectLimit(getState());

    try {
      const response = await extra.api.get<Post[]>('/posts', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
