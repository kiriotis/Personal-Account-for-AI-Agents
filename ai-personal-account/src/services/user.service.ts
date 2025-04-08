import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from './base-query.ts';
import { iUser } from '../interfaces/user/user.interface.ts';

export const authUser = createApi({
  reducerPath: 'authUser',
  tagTypes: ['user'],
  baseQuery: baseQueryHandler,
  endpoints: (builder) => ({
    userme: builder.mutation<iUser, void>({
      query: () => ({
        url: '/users/me',
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        formData: true,
      }),
    }),
  }),
});

export const {useUsermeMutation} = authUser;
