/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);

    console.log("Connected to DB!!!");

    server = app.listen(envVars.PORT, () => {
      console.log(`Server listening on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

// Error handling for server
process.on("SIGTERM", () => {
  console.log("signal termination occur...server shuting down!!! ");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("SIGINT", () => {
  console.log("signal interruption (ctrl+c) occur...server shuting down!!! ");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("unhandledRejection", (error) => {
  console.log("unhandled Rejection occur...server shuting down!!! ", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("uncaughtException", (error) => {
  console.log("uncaught exception occur...server shuting down!!! ", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
