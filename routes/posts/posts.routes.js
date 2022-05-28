import express from "express";
import { createPosts, getPosts } from "./posts.controller";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);

export default router;
