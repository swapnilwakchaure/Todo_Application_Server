import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connection = mongoose.connect(process.env.MONGODB_URL || "")
    .then(() => console.log("Connected to the MongoDB database."))
    .catch((error) => console.log("MongoDB connection error: ", error));