import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from '../shared/lib/base-query.ts';
import { ActiviyResponse } from '../interfaces/activity.interface.ts';
import { UsageRequest } from '../interfaces/usage.interface.ts';

export const usageService = createApi({
  reducerPath: 'activityService',
  tagTypes: ['usage'],
  baseQuery: baseQueryHandler,
  endpoints: (builder) => ({
    allActivitys: builder.query<ActiviyResponse, UsageRequest>({
      query: () => ({
        url: `usage?`,
        method: 'GET',
      }),
      providesTags: ['usage'],
    }),
  }),
});

export const { useAllActivitysQuery, useLazyAllActivitysQuery } =
  usageService;
