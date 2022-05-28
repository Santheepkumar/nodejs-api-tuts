import express from "express";
import { createPosts, getPosts, updatePost } from "./posts.controller";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/:id", updatePost);

export default router;