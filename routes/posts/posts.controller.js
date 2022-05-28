import { formatResponse } from "../../lib/res.lib";
import Posts from "./posts.model";

function getPosts(req, res, next) {
  const limit = Number(req.query.limit) || 0;

  Posts.find({})
    .limit(limit)
    .then((posts) => {
      formatResponse(res, posts, 200);
    })
    .catch(next);
}

function createPosts(req, res, next) {
  const { userId, title, body } = req.body;
  Posts.create({
    userId: userId,
    title,
    body,
  })
    .then((post) => {
      res.json(post);
    })
    .catch(next);
}

export { getPosts, createPosts };
