import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {selectForm} from '../selectors/selectForm';
import {ServerBadRequestResponse} from 'shared/lib/types';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import axios from 'axios';
import {Profile} from 'entities/Profile';

export const putProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ServerBadRequestResponse<keyof Profile>>
>(
  'profile/putProfileData',
  async (_, thunkApi) => {
    const {extra, rejectWithValue, getState} = thunkApi;

    const formData = selectForm(getState());

    try {
      const response = await extra.api.put<Profile>(
        `/profile/${formData?._id}`,
        formData,
      );

      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      }
      return rejectWithValue(defaultFormSendingErrorMsg);
    }
  },
);
