import express from "express";
import mongoose from "mongoose";
import User from "./models/user";
import "dotenv/config";
const app = express();
const port = process.env.APP_PORT;

const connectionString = process.env.MONGO_DB_CONNECTION_STRING;
mongoose.connect(connectionString);
mongoose.connection.on("error", (err) => {
  throw new Error("Mongo connection failed");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  const savedUser = await User.create({
    title: "Sam",
    author: "me",
    date: 25052022,
  });

  res.json(savedUser);
});

app.get("/find", async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
