import { z } from "zod";

export const commonPaginationSchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
});
