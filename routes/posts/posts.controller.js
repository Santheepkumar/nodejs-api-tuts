import Posts from "./posts.model";

function getPosts(req, res, next) {
  Posts.find({})
    .limit(10)
    .then((posts) => {
      res.type("json").status(200).send(JSON.stringify(posts, null, 2, "\n"));
    })
    .catch((err) => {
      next(err);
    });
}

export { getPosts };
