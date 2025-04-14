import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from './base-query.ts';
import { iUser } from '../interfaces/user/user.interface.ts';
import { patch } from '@mui/material';

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
    }),
    patchUser: builder.mutation<
      iUser,
      { id: string; userData: Partial<Omit<iUser, 'id'>> }
    >({
      query: ({ id, userData }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useUsermeMutation, usePatchUserMutation, useGetUserQuery } =
  authUser;
