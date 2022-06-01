import mongoose from "mongoose";
const { Schema, model } = mongoose;

const photoSchema = new Schema({
  albumId: {
    type: String,
    required: true,
  },
  id: Number,
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default model("Photos", photoSchema, "photos");
