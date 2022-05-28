import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes/main.routes";
import "dotenv/config";
import "./database";
import { formatResponse } from "./lib/res.lib";
const app = express();
const port = process.env.APP_PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRoutes);

app.use((err, req, res, next) => {
  if (err) {
    const errorObj = {
      message: err.message,
      stack: err.stack,
    };
    formatResponse(res, errorObj, 400);
  }
});
// Once mongoDB connected the start the server
mongoose.connection.on("connected", (err, res) => {
  app.listen(port, () => {
    console.log(`Our app listening on port ${port}`);
  });
});
