import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthenticationSchema} from '../types/authenticationSchema';
import {logout} from '../services/logout/logout';
import {login} from '../services/login/login';

const initialState: AuthenticationSchema = {
  username: '',
  password: '',
  isSending: false,
  sendingError: undefined
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
        state.sendingError = undefined;
      })
      .addCase(login.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isSending = false;
        state.sendingError = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isSending = true;
        state.sendingError = undefined;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isSending = false;
        state.sendingError = action.payload;
      });
  },
});

export const {
  actions: authenticationActions,
  reducer: authenticationReducer,
} = authenticationSlice;
