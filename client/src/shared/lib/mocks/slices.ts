import {userRegistrationReducer} from 'features/Registration/model/slices/userRegistrationSlice';

export const mockUserSlice = {
  user: {
    authData: {
      id: '123',
      username: 'string',
    },
  },
};

export const initialUserRegistrationSlice = {
  username: '',
  password: '',
  email: '',
  isSending: false,
  sendingErrorMsg: undefined
};

export const asyncUserRegistrationReducer = {
  userRegistration: userRegistrationReducer
};