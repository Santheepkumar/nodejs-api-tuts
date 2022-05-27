import Posts from "./posts.model";

function getPosts(req, res, next) {
  Posts.find({}).limit(5)
    .then((posts) => {
      res.type("json").status(200).send(JSON.stringify(posts, null, 2, "\n"));
    })
    .catch((e) => {
      next(e);
    });
}

export { getPosts };
