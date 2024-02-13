import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthenticationSchema} from '../types/authenticationSchema';
import {logout} from '../services/logout/logout';
import {login} from '../services/login/login';
import {mapServerBadRequestErrors} from 'shared/lib/utils/mapServerBadRequestErrors';

const initialState: AuthenticationSchema = {
  username: '',
  password: '',
  isSending: false,
  sendingErrorMsg: undefined
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isSending = true;
        state.sendingErrorMsg = undefined;
        state.sendingErrorFields = undefined;
      })
      .addCase(login.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isSending = false;
        state.sendingErrorMsg = action.payload?.message;
        if (action.payload && Array.isArray(action.payload.errors)) {
          state.sendingErrorFields = mapServerBadRequestErrors(action.payload.errors);
        }
      })
      .addCase(logout.pending, (state) => {
        state.isSending = true;
        state.sendingErrorMsg = undefined;
        state.sendingErrorFields = undefined;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isSending = false;
        state.sendingErrorMsg = action.payload?.message;
        if (action.payload && Array.isArray(action.payload.errors)) {
          state.sendingErrorFields = mapServerBadRequestErrors(action.payload.errors);
        }
      });
  },
});

export const {
  actions: authenticationActions,
  reducer: authenticationReducer,
} = authenticationSlice;
