const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./Routes/CookieRoute");

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
