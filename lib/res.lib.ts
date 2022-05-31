import { Response } from "express";

function formatResponse(res: Response, data: any, status: number) {
  res
    .type("json")
    .status(status)
    .send(JSON.stringify(data, null, 2) + "\n");
}

export { formatResponse };
