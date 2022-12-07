import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "ResgistrationForm",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Succesfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
