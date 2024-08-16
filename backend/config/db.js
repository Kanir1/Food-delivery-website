import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
    const dbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ezctw.mongodb.net/food-del`;
    await mongoose.connect(dbURI).then(() => console.log("DB Connected"));
};