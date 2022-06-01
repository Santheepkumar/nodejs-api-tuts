import mongoose from "mongoose";
import { connectionString } from "./env";

mongoose.connect(connectionString);
mongoose.connection.on("error", (err) => {
  throw new Error("Mongo connection failed");
});
mongoose.set("debug", true);

const close = () => {
  mongoose.disconnect();
};

export { mongoose, close };

export default mongoose;
