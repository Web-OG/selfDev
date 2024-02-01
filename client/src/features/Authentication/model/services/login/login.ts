import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getLoginUsername} from 'features/Authentication/model/selectors/getLoginUsername/getLoginUsername';
import {getLoginPassword} from 'features/Authentication/model/selectors/getLoginPassword/getLoginPassword';

export const login = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<string>
>(
  'Authentication/login',
  async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue, getState} = thunkApi;
    const username = getLoginUsername(getState());
    const password = getLoginPassword(getState());
    const authData = {username, password};

    try {
      const response = await extra.api.post<User>('/user/login', authData);
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
