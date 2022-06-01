import { formatResponse } from "../../lib/res.lib";
import Comments from "./comments.model";

export function getComments(req, res, next) {
  const postId = req.query.postId;
  const condition = {};
  if (postId) {
    condition.postId = postId;
  }
  Comments.find(condition)
    .then((comments) => {
      formatResponse(res, comments, 200);
    })
    .catch(next);
}
