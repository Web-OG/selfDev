import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Profile} from 'entities/Profile';
import {MultiLanguageMassage} from 'shared/lib/types';
import {defaultLoadingErrorMsg} from 'shared/lib/messages';

export const getProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<MultiLanguageMassage>
>(
  'profile/getProfileData',
  async (profileId, thunkApi) => {
    const {extra, rejectWithValue} = thunkApi;

    try {
      const response = await extra.api.get<Profile>(`/api/profile/${profileId}`);

      return response.data;
    } catch (err: unknown) {
      if (extra.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      }
      return rejectWithValue(defaultLoadingErrorMsg);
    }
  },
);
