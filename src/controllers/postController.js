const { z } = require("zod");
const Post = require("../models/postModel");
const createPostSchema = require("../validations/postValidation");

const createPost = async (req, res) => {
  try {
    const validateData = createPostSchema.parse(req.body);

    const newPost = new Post(validateData);

    await newPost.save();

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = { createPost };
