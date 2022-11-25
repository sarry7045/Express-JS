import express from "express";
import connectDB from "./db/connectdb.js";
import { join } from "path";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);

app.use(express.static(join(process.cwd(), "public")));
app.set("view engine", "ejs");

app.use("/student", web);
// app.get("/student", (req,res) => {
//     res.send("IIII")
// })

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
