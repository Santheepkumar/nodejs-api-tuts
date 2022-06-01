import express from "express";
import { getComments } from "./comments.controller";
const router = express.Router();

router.get("/", getComments);

export default router;
