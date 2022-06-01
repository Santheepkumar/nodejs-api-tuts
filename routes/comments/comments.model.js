import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  postId: {
    type: String,
    required: true,
  },
  id: Number,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export default model("Comments", commentSchema, "comments");
