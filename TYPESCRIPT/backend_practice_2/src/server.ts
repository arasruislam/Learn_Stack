/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);

    console.log("connect to db!!!!");

    server = app.listen(envVars.PORT, () => {
      console.log(`Server running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

// Error Handler for server
process.on("SIGTERM", () => {
  console.log("Signal terminated error...server shuting down");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
process.on("SIGINT", () => {
  console.log("Signal terminated error...server shuting down");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
process.on("unhandledRejection", (error) => {
  console.log("Unhanlde Rejection Error...server shuting down !!! ", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
process.on("uncaughtException", (error) => {
  console.log("Uncaught rejection error!!!! ", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
