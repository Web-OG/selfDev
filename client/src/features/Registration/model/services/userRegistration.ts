import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getUserRegistrationUsername} from '../selectors/getUserRegistrationUsername';
import {getUserRegistrationPassword} from '../selectors/getUserRegistrationPassword';
import {getUserRegistrationEmail} from '../selectors/getUserRegistrationEmail';
import {ServerSuccessesMassage} from 'shared/types';

export const userRegistration = createAsyncThunk<
  ServerSuccessesMassage,
  undefined,
  ThunkConfig<string>
>(
  'Registration/userRegistration',
  async (_, thunkApi) => {
    const {extra, rejectWithValue, getState} = thunkApi;
    const username = getUserRegistrationUsername(getState());
    const password = getUserRegistrationPassword(getState());
    const email = getUserRegistrationEmail(getState());
    const authData = {username, email, password};

    try {
      const response = await extra.api.post('/user/registration', authData);

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
