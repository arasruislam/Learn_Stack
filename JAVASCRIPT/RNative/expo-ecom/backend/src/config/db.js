import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("Connected to mongodb!!!");
  } catch (error) {
    console.error("Mongodb connection error");
    process.exit(1);
  }
};

