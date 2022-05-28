import mongoose from "mongoose";
const { Schema, model } = mongoose;
import mongooseSeq from "mongoose-sequence";
const AutoIncrement = mongooseSeq(mongoose);

const postSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  id: Number,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

postSchema.plugin(AutoIncrement, { inc_field: "id" });

export default model("Posts", postSchema, "posts");
