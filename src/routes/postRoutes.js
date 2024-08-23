const express = require("express");
const { createPost, getAllPosts } = require("../controllers/postController");

const router = express.Router();

router.post("/posts", createPost);

router.get("/posts" , getAllPosts) ; 

module.exports = router;
