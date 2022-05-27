import express from "express";
const router = express.Router();
import postRoutes from "./posts/posts.routes";

router.use("/posts", postRoutes);

export default router;
