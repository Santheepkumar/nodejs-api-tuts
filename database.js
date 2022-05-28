import mongoose from "mongoose";
import { connectionString } from "./env";

mongoose.connect(connectionString);

mongoose.connection.on("error", (err) => {
  throw new Error("Mongo connection failed");
});

function close() {
  mongoose.disconnect();
}

export { close, mongoose };

export default mongoose;
