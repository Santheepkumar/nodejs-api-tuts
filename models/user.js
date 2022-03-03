import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number,
//   },
});

export default model("Users", userSchema, "users");
