import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/providers/StoreProvider';
import {selectUsername} from '../selectors/selectUsername';
import {selectPassword} from '../selectors/selectPassword';
import {selectEmail} from '../selectors/selectEmail';
import {ServerBadRequestResponse, ServerSuccessesMassage} from '@/shared/lib/types';
import {UserRegistrationFields} from '../types/userRegistrationSchema';
import axios from 'axios';
import {defaultFormSendingErrorMsg} from '@/shared/lib/messages';

export const postRegistration = createAsyncThunk<
  ServerSuccessesMassage,
  undefined,
  ThunkConfig<ServerBadRequestResponse<keyof UserRegistrationFields>>
>(
  'Registration/postRegistration',
  async (_, thunkApi) => {
    const {extra, rejectWithValue, getState} = thunkApi;
    const username = selectUsername(getState());
    const password = selectPassword(getState());
    const email = selectEmail(getState());
    const authData = {username, email, password};

    try {
      const response = await extra.api.post('/api/user/registration', authData);

      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      }
      return rejectWithValue(defaultFormSendingErrorMsg);
    }
  },
);
