import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from '../shared/lib/base-query.ts';
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
    getUser: builder.query<iUser, void>({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
    patchUser: builder.mutation<
      iUser,
      { userData: Partial<Omit<iUser, 'id'>> }
    >({
      query: ({ userData }) => ({
        url: `/users/me`,
        method: 'PATCH',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
        providesTags: ['user'],
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useUsermeMutation, usePatchUserMutation, useGetUserQuery } =
  authUser;
