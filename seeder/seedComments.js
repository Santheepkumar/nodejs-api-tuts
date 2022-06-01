import Comments from "../routes/comments/comments.model";
import { faker } from "@faker-js/faker";

async function importComments() {
  const fiveHunded = [...Array(500).keys()];
  const payload = fiveHunded.map((elem) => {
    return {
      postId: faker.random.numeric(),
      id: elem + 1,
      name: faker.name.findName(),
      email: faker.lorem.word() + "@sample.com",
      body: faker.lorem.words(12),
    };
  });
  await Comments.insertMany(payload);
}

export { importComments };
