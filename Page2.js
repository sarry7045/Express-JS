const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const staticPath = path.join(__dirname, "./Index.html");
const PartialPath = path.join(__dirname, "./views/Partials");

app.use(express.static(staticPath));

app.set("view engine", "hbs");
hbs.registerPartials("./views/Partials/");

app.get("", (req, res) => {
  res.render("index", {
    dynamicdata: "Hello Dynamic",
  });
});

app.get("/data", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Suraj",
      mobile: 12345,
    },
    {
      id: 2,
      name: "Neeraj",
      mobile: 12345,
    },

    {
      id: 3,
      name: "Ashish",
      mobile: 12345,
    },
    {
      id: 4,
      name: "Aditya",
      mobile: 12345,
    },
  ]);
});

app.get("*", (req, res) => {
  res.render("404", {
    Not: "Page not Found",
  });
});

app.listen(5000, () => {
  console.log(`Server is Running at Port no: 5000`);
});
