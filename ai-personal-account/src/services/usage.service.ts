import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from '../shared/lib/base-query.ts';
import {
  UsageRequest,
  UsageRequsetSchema,
  UsageResponse,
  UsageResponseSchema,
} from '../interfaces/usage.interface.ts';

export const usageService = createApi({
  reducerPath: 'usageService',
  tagTypes: ['usage-tockens', 'usage-messages'],
  baseQuery: baseQueryHandler,
  endpoints: (builder) => ({
    getUsageToken: builder.query<{ data: UsageResponse }, UsageRequest>({
      query: (rawReq) => {
        // Валидация входящих данных
        const validationResult = UsageRequsetSchema.safeParse({
          ...rawReq,
          type: 'tokens',
        });
        if (!validationResult.success) {
          throw new Error(
            `Ошибка валидации запроса getUsageToken: ${validationResult.error.message}`
          );
        }

        // Используем провалидированные данные
        const validatedReq = validationResult.data;
        return {
          url: `/usage?type=${validatedReq.type}&days=${validatedReq.days}&start_date=${validatedReq.start_date}`,
          method: 'GET',
        };
      },
      providesTags: ['usage-tockens'],
      transformResponse: (response: unknown) => {
        const parsed = UsageResponseSchema.safeParse(response);
        if (!parsed.success) {
          console.error(
            'Ошибка валидации getUsageToken:',
            parsed.error.format()
          );
          throw new Error('Ошибка валидации ответа getUsageToken');
        }
        return { data: parsed.data };
      },
    }),
    getUsageMessage: builder.query<UsageResponse, UsageRequest>({
      query: (rawReq) => {
        // Валидация входящих данных
        const validationResult = UsageRequsetSchema.safeParse({
          ...rawReq,
          type: 'message',
        });
        if (!validationResult.success) {
          throw new Error(
            `Ошибка валидации запроса getUsageMessage: ${validationResult.error.message}`
          );
        }

        // Используем провалидированные данные
        const validatedReq = validationResult.data;
        return {
          url: '/usage',
          method: 'GET',
          body: validatedReq,
        };
      },
      providesTags: ['usage-messages'],
      transformResponse: (response: UsageResponse) => {
        const parsed = UsageResponseSchema.safeParse(response);
        if (!parsed.success) {
          console.error(
            'Ошибка валидации getUsageMessage:',
            parsed.error.format()
          );
          throw new Error('Ошибка валидации ответа getUsageMessage');
        }
        return parsed.data;
      },
    }),
  }),
});

export const { useGetUsageMessageQuery, useGetUsageTokenQuery } = usageService;
