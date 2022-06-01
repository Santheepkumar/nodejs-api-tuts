import { formatResponse } from "../../lib/res.lib";
import Comments from "../comments/comments.model";
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

function getPost(req, res, next) {
  const recordId = req.params.id;
  Posts.findOne({ id: recordId })
    .then((post) => {
      if (!post) {
        throw new Error(`No post found for this id - ${recordId}`);
      }
      res.json(post);
    })
    .catch(next);
}

function createPost(req, res, next) {
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

function getPostComments(req, res, next) {
  const postId = req.params.id;
  Comments.find({ postId })
    .then((comments) => {
      formatResponse(res, comments, 200);
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

async function deletePost(req, res, next) {
  const recordId = req.params.id;
  try {
    // await Posts.deleteMany({ title: "One" });
    await Posts.deleteOne({ id: recordId });
    res.json({
      message: "Record deleted",
    });
  } catch (errr) {
    next(err);
  }
}

export {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
  getPostComments,
};
