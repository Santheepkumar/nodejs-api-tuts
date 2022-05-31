import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";

import apiRoutes from "./routes/main.routes";
import { formatResponse } from "./lib/res.lib";
import { port } from "./env";
import "./database";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", apiRoutes);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (err) {
      const errorObj = {
        message: (err as any).message,
        stack: (err as any).stack,
      };
      formatResponse(res, errorObj, 400);
    }
  }
);

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
