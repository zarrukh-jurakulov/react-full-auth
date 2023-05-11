import { z } from "zod";

const ArticleSchema = z.object({
  id: z.number(),
  body: z.string(),
  title: z.string(),
  picture: z.string(),
  user_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

type ArticleType = z.infer<typeof ArticleSchema>;

export { type ArticleType, ArticleSchema };
