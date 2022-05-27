import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
});

export default model("Posts", postSchema, "posts");
