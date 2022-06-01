import mongoose, { close } from "../database";
import { importComments } from "./seedComments";
import { importPhotos } from "./seedPhotos";

async function dropSeeds(cNames) {
  for (const name of cNames) {
    await mongoose.connection.dropCollection(name);
  }
}

try {
  if (process.argv[2] === "-d") {
    await dropSeeds(["comments", "photos"]);
  } else {
    await importComments();
    await importPhotos();
  }
} finally {
  close();
}
