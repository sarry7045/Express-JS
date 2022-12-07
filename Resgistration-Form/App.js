import express from "express";
import connectDB from "./DB/ConnectDB.js";
import web from "./Routes/Routes.js";
const app = express();
const port = process.env.PORT || 5000;

const DATABASE_URL = "mongodb://localhost:27017";

connectDB(DATABASE_URL);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", web);

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
