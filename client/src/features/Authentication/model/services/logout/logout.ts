import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {StorageDispatcher} from 'shared/lib/services/StorageService';

export const logout = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<string>
>(
  'Authentication/logout',
  async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;

    try {
      const response = await extra.api.post<User>('/user/logout');

      dispatch(userActions.logout());
      StorageDispatcher.removeItem('user');

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
