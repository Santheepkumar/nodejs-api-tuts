import mongoose, { close } from "../database";
import { addSampleAlbums } from "./albums.seed";

async function dropCollections(...colections) {
  for (const key of colections) {
    await mongoose.connection.dropCollection(key);
  }
}

try {
  if (process.argv[2] === "-d") {
    // TO drop any collections here by passing collection names
    await dropCollections("albums");
  } else {
    // To seed add methods here
    await addSampleAlbums();
  }
} finally {
  close();
}
