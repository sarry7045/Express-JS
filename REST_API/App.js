import express from "express";
import connectDB from "./db/db.js";
import router from "./Routes/StudentRoutes.js";

const app = express();
const port = 5000;

const DATABASE_URL = "mongodb://localhost:27017";
connectDB(DATABASE_URL);
app.use(express.json());
app.use("/restAPI", router);

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
