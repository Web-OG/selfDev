import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {StorageDispatcher} from 'shared/lib/services/StorageService';
import {ServerBadRequestResponse} from 'shared/lib/types';
import axios from 'axios';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import {AuthenticationFields} from '../types/authenticationSchema';

export const postLogout = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<ServerBadRequestResponse<keyof AuthenticationFields>>
>(
  'Authentication/postLogout',
  async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;

    try {
      const response = await extra.api.post<User>('/user/logout');

      dispatch(userActions.logout());
      StorageDispatcher.removeItem('user');

      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      }
      return rejectWithValue(defaultFormSendingErrorMsg);
    }
  },
);
