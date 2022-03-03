import express from "express";
import mongoose from "mongoose";
import User from "./models/user";
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27018/myapp");
mongoose.connection.on("error", (err) => {
  throw new Error("Mongo connection failed");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  const savedUser = await User.create({
    title: "Sana",
    author: "me",
  });

  res.json(savedUser);
});

app.get("/test2", async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
