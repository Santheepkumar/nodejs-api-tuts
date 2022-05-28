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

async function updatePost(req, res, next) {
  const recordId = req.params.id;

  if (!recordId) throw new Error("Post Id not passed in url");

  try {
    const record = await Posts.findOne({ id: recordId });
    if (!record) {
      throw new Error(`No Post Found with provided id ${recordId}`);
    }
    const { title, body } = req.body;
    record.title = title;
    record.body = body;

    const updatedRecord = await record.save();
    res.json(updatedRecord);
  } catch (err) {
    next(err);
  }
}

export { getPosts, createPosts, updatePost };
