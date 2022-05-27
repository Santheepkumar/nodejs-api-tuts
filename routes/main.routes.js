import express from "express";
const router = express.Router();
import postRoutes from "./posts/posts.routes";

router.get("/", (req, res) => {
  res.send("Inside /api");
});
router.use("/posts", postRoutes);

export default router;
