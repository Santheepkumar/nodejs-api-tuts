import mongoose from "mongoose";
const { Schema, model } = mongoose;
import mongooseSeq from "mongoose-sequence";
const AutoIncrement: any = mongooseSeq(mongoose as any);

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
