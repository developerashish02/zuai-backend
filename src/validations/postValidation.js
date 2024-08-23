const { z } = require("zod");

const createPostSchema = z.object({
  title: z.string().min(5).max(100),
  content: z.string().min(10),
  author: z.string(),
});

const updatePostSchema = z.object({
  title: z.string().min(5).max(100).optional(),
  content: z.string().min(10).optional(),
  author: z.string().optional(),
});
module.exports = { createPostSchema, updatePostSchema };
