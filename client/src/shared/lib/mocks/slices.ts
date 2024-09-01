import {userRegistrationReducer} from 'features/Registration/model/slices/userRegistrationSlice';

export const mockUserSlice = {
  user: {
    authData: {
      _id: '123',
      username: 'string',
    },
    _initialized: false
  },
};

export const initialUserRegistrationSlice = {
  username: '',
  password: '',
  email: '',
  isSending: false,
  sendingErrorMsg: undefined
};

export const postListSlice = {
  postList: {
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    limit: 4,
    page: 1,
    hasMore: false,
    count: 1,
    view: 'small',
    pagination: {totalPages: 1, next: null, prev: null, currentPage: 1}
  },
};

export const asyncUserRegistrationReducer = {
  userRegistration: userRegistrationReducer
};