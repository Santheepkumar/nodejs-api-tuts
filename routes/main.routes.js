import express from "express";
const router = express.Router();
import postRoutes from "./posts/posts.routes";
import commentRoutes from "./comments/comments.routes";
import photosModel from "./photos.model";
import { formatResponse } from "../lib/res.lib";

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

// Move own routes and controllers
router.get("/photos", (req, res, next) => {
  photosModel
    .find({})
    .then((photos) => {
      formatResponse(res, photos, 200);
    })
    .catch(next);
});

export default router;
