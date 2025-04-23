import { z } from 'zod';

export const BaseQueryResponseSchema = z.object({
  data: z.unknown(),
  total: z.number().optional(),
});
export type BaseQueryResponse = z.infer<typeof BaseQueryResponseSchema>;
