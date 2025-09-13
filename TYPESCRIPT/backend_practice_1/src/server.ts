import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://practice:practice@cluster0.ffyk5kj.mongodb.net/tour-system"
    );

    console.log("Connected to DB!!!");

    server = app.listen(5000, () => {
      console.log("Server listening on port 5000");
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
