import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LOCALSTORAGE} from 'shared/constants/localstorage';
import {User, UserSchema} from '../types/user';

const initialState: UserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCALSTORAGE.USER_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._initialized = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCALSTORAGE.USER_KEY);
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice;
