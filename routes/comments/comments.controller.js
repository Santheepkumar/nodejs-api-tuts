import { formatResponse } from "../../lib/res.lib";
import Comments from "./comments.model";

export function getComments(req, res, next) {
  Comments.find({})
    .then((comments) => {
      formatResponse(res, comments, 200);
    })
    .catch(next);
}
