import { createApi } from '@reduxjs/toolkit/query/react';
import { ILoginRequest, ILoginResponse } from '../interfaces/auth/auth.interface.ts';
import baseQueryHandler from './base-query.ts';

export const authService = createApi({
  reducerPath: 'authService',
  tagTypes: ['auth'],
  baseQuery: baseQueryHandler,
  endpoints: builder => ({
    login: builder.mutation<ILoginResponse, URLSearchParams>({
      query: data => ({
        url: 'login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
        formData: true
      })
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
        providesTags: ['auth'],
      }),
      invalidatesTags: ['auth']
    }),

  })
});

export const {
  useLoginMutation,
  useLogoutMutation
} = authService;
