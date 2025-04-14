import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthenticationSchema} from '@/features/Authentication';
import {postLogout} from '../services/postLogout';
import {postLogin} from '../services/postLogin';
import {mapServerBadRequestErrors} from '@/shared/lib/utils/mapServerBadRequestErrors';

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
      .addCase(postLogin.pending, (state) => {
        state.isSending = true;
        state.sendingErrorMsg = undefined;
        state.sendingErrorFields = undefined;
      })
      .addCase(postLogin.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.isSending = false;
        state.sendingErrorMsg = action.payload?.message;
        if (action.payload && Array.isArray(action.payload.errors)) {
          state.sendingErrorFields = mapServerBadRequestErrors(action.payload.errors);
        }
      })
      .addCase(postLogout.pending, (state) => {
        state.isSending = true;
        state.sendingErrorMsg = undefined;
        state.sendingErrorFields = undefined;
      })
      .addCase(postLogout.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(postLogout.rejected, (state, action) => {
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
