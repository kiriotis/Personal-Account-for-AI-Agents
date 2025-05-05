import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from '../shared/lib/base-query.ts';
import { IStatsResponse } from '../interfaces/stats.interface.ts';

export const statsService = createApi({
  reducerPath: 'statsService',
  tagTypes: ['stats'],
  baseQuery: baseQueryHandler,
  endpoints: (builder) => ({
    getStats: builder.query<IStatsResponse, void>({
      query: () => ({
        url: 'stats',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetStatsQuery, useLazyGetStatsQuery } = statsService;
