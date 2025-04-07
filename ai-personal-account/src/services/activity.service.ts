import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from './base-query.ts';
import { ActiviyResponse } from '../interfaces/activity.interface.ts';

export const activityService = createApi({
  reducerPath: 'activityService',
  tagTypes: ['activity'],
  baseQuery: baseQueryHandler,
  endpoints: (builder) => ({
    allActivitys: builder.query<ActiviyResponse, void>({
      query: () => ({
        url: 'activity',
        method: 'GET',
      }),
    }),
  }),
});

export const { useAllActivitysQuery, useLazyAllActivitysQuery } =
  activityService;
