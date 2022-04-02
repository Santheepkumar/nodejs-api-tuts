import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  title: String,
  author: String,
});

export default model("Users", userSchema, "users");
