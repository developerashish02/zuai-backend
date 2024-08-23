const { z } = require("zod");
const Post = require("../models/postModel");
const createPostSchema = require("../validations/postValidation");

const createPost = async (req, res) => {
  try {
    const validateData = createPostSchema.parse(req.body);

    const newPost = new Post(validateData);

    await newPost.save();

    return res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    } else {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
};

module.exports = { createPost, getAllPosts };
