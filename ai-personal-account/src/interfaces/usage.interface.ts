import { z } from 'zod';

export const UsageRequsetSchema = z.object({
  type: z.enum(['tokens', 'messages']),
  days: z.enum(['7', '30', '90']),
  start_date: z.string(),
});
export type UsageRequest = z.infer<typeof UsageRequsetSchema>;

