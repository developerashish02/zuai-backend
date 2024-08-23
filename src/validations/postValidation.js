const { z } = require("zod");

const createPostSchema = z.object({
  title: z.string().min(5).max(100),
  content: z.string().min(10),
  author: z.string(),
});

module.exports = createPostSchema;
