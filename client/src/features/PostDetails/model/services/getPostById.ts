import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/providers/StoreProvider';
import {PostEntity} from '@/entities/Post';

export const getPostById = createAsyncThunk<
  PostEntity,
  string,
  ThunkConfig<string>
>(
  'postDetails/getPostById',
  async (articleId, thunkApi) => {
    const {extra, rejectWithValue} = thunkApi;

    try {
      const response = await extra.api.get<PostEntity>(`/api/posts/${articleId}`);

      return response.data;
    } catch (evt) {
      return rejectWithValue('error');
    }
  },
);
