import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI || "";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Cannot connect to MongoDB");
  }
};
