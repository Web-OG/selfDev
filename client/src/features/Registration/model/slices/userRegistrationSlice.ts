import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserRegistrationSchema} from '../types/userRegistrationSchema';
import {postRegistration} from '../services/postRegistration';
import {mapServerBadRequestErrors} from 'shared/lib/utils/mapServerBadRequestErrors';

const initialState: UserRegistrationSchema = {
  username: '',
  password: '',
  email: '',
  isSending: false,
  sendingErrorMsg: undefined
};

export const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegistration.pending, (state) => {
        state.isSending = true;
        state.sendingErrorMsg = undefined;
        state.sendingErrorFields = undefined;
      })
      .addCase(postRegistration.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(postRegistration.rejected, (state, action) => {
        state.isSending = false;
        state.sendingErrorMsg = action.payload?.message;
        if (action.payload && Array.isArray(action.payload.errors)) {
          state.sendingErrorFields = mapServerBadRequestErrors(action.payload.errors);
        }
      });
  },
});

export const {
  actions: userRegistrationActions,
  reducer: userRegistrationReducer,
} = userRegistrationSlice;
