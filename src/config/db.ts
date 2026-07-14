import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise <void> => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp");
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
export default connectDB;