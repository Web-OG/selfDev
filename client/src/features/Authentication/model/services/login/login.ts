import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getLoginUsername} from 'features/Authentication/model/selectors/getLoginUsername';
import {getLoginPassword} from 'features/Authentication/model/selectors/getLoginPassword';
import {ServerBadRequestResponse} from 'shared/types';
import axios from 'axios';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import {AuthenticationFields} from '../../types/authenticationSchema';

export const login = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<ServerBadRequestResponse<keyof AuthenticationFields>>
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

      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      }
      return rejectWithValue(defaultFormSendingErrorMsg);
    }
  },
);
