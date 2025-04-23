import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryHandler from '../shared/lib/base-query.ts';
import {
  UsageMessagesResponse,
  UsageMessagesResponseSchema,
  UsageRequest,
  UsageRequsetSchema,
  UsageTokenResponse,
  UsageTokenResponseSchema,
} from '../interfaces/usage.interface.ts';

export const usageService = createApi({
  reducerPath: 'usageService',
  tagTypes: ['usage-tokens', 'usage-messages'],
  baseQuery: baseQueryHandler,
  endpoints: (builder) => ({
    getUsageToken: builder.query<UsageTokenResponse, UsageRequest>({
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
      providesTags: ['usage-tokens'],
      transformResponse: (response: unknown) => {
        const parsed = UsageTokenResponseSchema.safeParse(response);
        if (!parsed.success) {
          console.error(
            'Ошибка валидации getUsageToken:',
            parsed.error.format()
          );
          throw new Error('Ошибка валидации ответа getUsageToken');
        }
        return parsed.data;
      },
    }),
    getUsageMessage: builder.query<UsageMessagesResponse, UsageRequest>({
      query: (rawReq) => {
        // Валидация входящих данных
        const validationResult = UsageRequsetSchema.safeParse({
          ...rawReq,
          type: 'messages',
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
      providesTags: ['usage-messages'],
      transformResponse: (response: unknown) => {
        const parsed = UsageMessagesResponseSchema.safeParse(response);
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
