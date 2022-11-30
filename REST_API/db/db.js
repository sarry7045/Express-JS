import mongoose from "mongoose";

const db = async (URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "rest",
    };
    await mongoose.connect(URL, DB_OPTIONS);
    console.log("Connected Successfully...");
  } catch (error) {
    console.log(error);
  }
};
export default db;
