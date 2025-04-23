import { z } from 'zod';

export const UsageRequsetSchema = z.object({
  type: z.enum(['tokens', 'messages']),
  days: z.enum(['7', '30', '90']),
  start_date: z.string(),
});

export const UsageResponseSchema = z.object({
  data: z.array(
    z.object({
      day: z.string(),
      n_input: z.number(),
      n_output: z.number(),
    })
  ),
});

export type UsageRequest = z.infer<typeof UsageRequsetSchema>;
export type UsageResponse = z.infer<typeof UsageResponseSchema>;
