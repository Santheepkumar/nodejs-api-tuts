import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes/main.routes";
import "dotenv/config";
import { formatResponse } from "./lib/res.lib";
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

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
