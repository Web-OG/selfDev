import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from '../index';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: `${__API__ || '/'}/api/user/`
    }),
  endpoints: (builder) => ({
    login: builder.mutation<User, { username: string, password: string }>({
      query: (payload) => ({
        url: 'login/',
        method: 'POST',
        body: payload
      }),
    }),
  }),
});

export const {useLoginMutation} = userApi;