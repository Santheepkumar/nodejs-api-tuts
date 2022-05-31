import mongoose from "../database";
import { faker } from "@faker-js/faker";

const AlbumSchema = new mongoose.Schema({
  userID: Number,
  id: Number,
  title: String,
});
const Album = mongoose.model("Albums", AlbumSchema, "albums");

async function addSampleAlbums() {
  const payload = [...Array(100).keys()].map((v) => ({
    id: v + 1,
    title: faker.lorem.words(5),
    userId: 1,
  }));

  console.log("payload", payload);
  const albums = await Album.insertMany(payload);
}

export { addSampleAlbums };
