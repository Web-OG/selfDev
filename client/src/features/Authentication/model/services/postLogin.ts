import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {selectUsername} from '../selectors/selectUsername';
import {selectPassword} from '../selectors/selectPassword';
import {ServerBadRequestResponse} from 'shared/lib/types';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';
import {AuthenticationFields} from '../types/authenticationSchema';

export const postLogin = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<ServerBadRequestResponse<keyof AuthenticationFields>>
>(
  'Authentication/postLogin',
  async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue, getState} = thunkApi;
    const username = selectUsername(getState());
    const password = selectPassword(getState());
    const authData = {username, password};

    try {
      const response = await extra.api.post<User>('/api/user/login', authData);
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err: unknown) {
      if (extra.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      }
      return rejectWithValue(defaultFormSendingErrorMsg);
    }
  },
);
