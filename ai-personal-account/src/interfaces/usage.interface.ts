import { z } from 'zod';

export const UsageRequsetSchema = z.object({
  type: z.enum(['tokens', 'messages']),
  days: z.enum(['7', '30', '90']),
  start_date: z.string(),
});

export const UsageTokenResponseSchema = z.object({
  data: z.array(
    z.object({
      day: z.string(),
      n_input: z.number(),
      n_output: z.number(),
    })
  ),
});

export const UsageMessagesResponseSchema = z.object({
  data: z.array(
    z.object({
      day: z.string(),
      n: z.number(),
    })
  ),
});

export type UsageRequest = z.infer<typeof UsageRequsetSchema>;
export type UsageTokenResponse = z.infer<typeof UsageTokenResponseSchema>;
export type UsageMessagesResponse = z.infer<typeof UsageMessagesResponseSchema>;
