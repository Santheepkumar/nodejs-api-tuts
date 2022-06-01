import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
  getPostComments,
} from "./posts.controller";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id/comments", getPostComments);

export default router;
