import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserRegistrationSchema} from '../types/userRegistrationSchema';
import {userRegistration} from '../services/userRegistration';

const initialState: UserRegistrationSchema = {
  username: '',
  password: '',
  email: '',
  isSending: false,
  sendingError: undefined
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
      .addCase(userRegistration.pending, (state) => {
        state.isSending = true;
        state.sendingError = undefined;
      })
      .addCase(userRegistration.fulfilled, (state) => {
        state.isSending = false;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.isSending = false;
        state.sendingError = action.payload;
      });
  },
});

export const {
  actions: userRegistrationActions,
  reducer: userRegistrationReducer,
} = userRegistrationSlice;
