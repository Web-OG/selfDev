import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {LOCALSTORAGE} from 'shared/constants/localstorage';
import {ThunkConfig} from 'app/providers/StoreProvider';

interface LoginData {
  username: string;
  password: string;
}

export const login = createAsyncThunk<
  User,
  LoginData,
  ThunkConfig<string>
>(
  'Authentication/login',
  async (authData, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;

    try {
      const response = await extra.api.post<User>('/user/login', authData);

      localStorage.setItem(LOCALSTORAGE.USER_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue('error');
      }
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
