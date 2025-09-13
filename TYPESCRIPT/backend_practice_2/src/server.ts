import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://practice:practice@cluster0.ffyk5kj.mongodb.net/tour-system"
    );

    console.log("connect to db!!!!");

    server = app.listen(5000, () => {
      console.log("Server running on port 5000");
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
