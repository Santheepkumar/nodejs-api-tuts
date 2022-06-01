import Photos from "../routes/photos.model";
import { faker } from "@faker-js/faker";

async function importPhotos() {
  const five1000 = [...Array(5000).keys()];
  const payload = five1000.map((elem) => {
    return {
      albumId: faker.random.numeric(),
      id: elem + 1,
      image: faker.image.abstract(),
      title: faker.lorem.words(4),
    };
  });
  await Photos.insertMany(payload);
}

export { importPhotos };
