import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.listen(8800, () => {
  connect();
  console.log("Server is listening on port 8800");
});
