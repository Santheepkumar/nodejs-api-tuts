import { formatResponse } from "../../lib/res.lib";
import Posts from "./posts.model";

function getPosts(req, res, next) {
  Posts.find({})
    .then((posts) => {
      formatResponse(res, posts, 200);
    })
    .catch(next);
}

export { getPosts };
