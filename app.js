import express from "express";
import apiRoutes from "./routes/main.routes";
import { formatResponse } from "./lib/res.lib";
import { port } from "./env";
import "./database";
const app = express();

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

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
