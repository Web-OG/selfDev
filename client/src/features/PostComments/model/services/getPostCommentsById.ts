import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Comment} from 'entities/Comment';
import {MultiLanguageMassage} from 'shared/lib/types';
import {defaultLoadingErrorMsg} from 'shared/lib/messages';

export const getPostCommentsById = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<MultiLanguageMassage>
>(
  'postComments/getPostCommentsById',
  async (articleId, thunkApi) => {
    const {extra, rejectWithValue} = thunkApi;

    try {
      const response = await extra.api.get<Comment[]>(`/api/comments/${articleId}`);

      return response.data;
    } catch (err: unknown) {
      if (extra.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      }
      return rejectWithValue(defaultLoadingErrorMsg);
    }
  },
);
