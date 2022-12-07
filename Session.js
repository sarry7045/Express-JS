const dotenv = require("dotenv").config();
const express = require("express");
const router = require("./Routes/SessionRoute");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./ConnectDB.js");

const app = express();
const port = process.env.PORT;

const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

const sessionStorage = MongoStore.create({
  mongoUrl: DATABASE_URL,
  dbName: process.env.DB_NAME,
  collectionName: "sessions",
  ttl: 14 * 24 * 60 * 60,
  autoRemove: "native",
});

app.use(
  session({
    name: "Suraj Session",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 100000 },
    store: sessionStorage,
  })
);

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
