import { clerkMiddleware } from "@clerk/express";
import express from "express";
import { serve } from "inngest/express";
import path from "path";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";
import { functions, inngest } from "./src/inngest";

const app = express();

const __dirname = path.resolve();

// middleware
app.use(clerkMiddleware());
app.use(express.json);
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "success" });
});

// make our ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}

const startServer = async () => {
  await connectDB();
  app.listen(ENV.PORT, () => {
    console.log("Server is up and running");
  });
};

startServer();
