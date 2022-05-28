import mongoose from "mongoose";
import inquirer from "inquirer";
import spinner from "./lib/spinner";

function connectionError() {
  spinner.error("MongoDB connection failed ❌");
  spinner.warn("Connection string is not valid (or) MongoDB is not active");
  process.exit(1);
}

function connectMongo(connectionString) {
  if (!connectionString) {
    connectionError();
  }
  mongoose.connect(connectionString);
  mongoose.connection.on("error", (err) => {
    connectionError();
  });
  mongoose.set("debug", true);
  mongoose.connection.on("connected", (err, res) => {
    spinner.success("DB connected and APP started 👍");
  });
}

async function getConnectionStringCli(envString) {
  if (envString) return;

  const inputConStr = await inquirer.prompt({
    name: "connString",
    type: "input",
    message: "Please give the connection string ✋:",
  });

  const connString = inputConStr.connString;
  return connectMongo(connString);
}

const production = process.env.NODE_ENV === "production";

if (production) {
  await getConnectionStringCli(process.env.MONGO_DB_CONNECTION_STRING);
} else {
  connectMongo(process.env.MONGO_DB_CONNECTION_STRING);
}

function close() {
  mongoose.disconnect();
}

export { close };
