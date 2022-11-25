const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello Welcome");
});

app.get("/about", function (req, res) {
  res.send("Hello About");
});

app.get("/calculator", function (req, res) {
  res.sendFile(__dirname + "/Home.html");
});

app.post("/calculator", function (req, res) {
  res.send("Thank you for your response");
  let v1 = Number(req.body.v1);
  let v2 = Number(req.body.v2);

  let sum = v1 + v2;
  res.send("The some Number is:" + sum);
});

app.listen(5000, function (req, res) {
  console.log("Server is Running at Port 5000");
});
