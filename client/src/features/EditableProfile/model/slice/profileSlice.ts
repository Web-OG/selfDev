import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileSchema} from '../types/profile';
import {getProfileData} from '../services/getProfileData';
import {putProfileData} from '../services/putProfileData';
import {Profile} from '@/entities/Profile';
import {mapServerBadRequestErrors} from '@/shared/lib/utils/mapServerBadRequestErrors';

const emptyFields: Profile = {
  city: '',
  username: '',
  phone: '',
  currency: undefined,
  country: undefined,
  age: 0,
  avatar: '',
  lastname: '',
  firstname: ''
};

export const initialState: ProfileSchema = {
  data: emptyFields,
  form: emptyFields,
  readonly: true,
  isLoading: false,
  loadingError: undefined,
  isSending: false,
  sendingErrorMsg: undefined,
  sendingErrorFields: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileData.pending, (state) => {
        state.loadingError = undefined;
        state.isLoading = true;
      })
      .addCase(getProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.loadingError = action.payload;
      })
      .addCase(putProfileData.pending, (state) => {
        state.sendingErrorMsg = undefined;
        state.sendingErrorFields = undefined;
        state.isSending = true;
      })
      .addCase(putProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.data = action.payload;
        state.form = action.payload;
        state.isSending = false;
        state.readonly = true;
        state.sendingErrorMsg = undefined;
        state.sendingErrorFields = undefined;
      })
      .addCase(putProfileData.rejected, (state, action) => {
        state.isSending = false;
        state.sendingErrorMsg = action.payload?.message;
        if (action.payload && Array.isArray(action.payload.errors)) {
          state.sendingErrorFields = mapServerBadRequestErrors(action.payload.errors);
        }
      });
  },
});

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice;

