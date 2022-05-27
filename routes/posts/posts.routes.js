import express from "express";
import { getPosts } from "./posts.controller";
const router = express.Router();

router.get("/", getPosts);

export default router;
