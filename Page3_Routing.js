const express = require("express");
const mongoose = require("mongoose");
const student = require("./Routes/Student");
const Page3Controller = require("./Controllers/Page3_Controller.js");
const StudentSchema = require("./StudentSchema");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;
const app = express();

mongoose
  .connect("mongodb://localhost:27017/schooldb")
  .then(() => {
    console.log("Connected Successfully..");
  })
  .catch((err) => {
    console.log(err);
  });

// app.all ("/sabkuch", (req,res) => {
//     res.send("All Method")
// })

// app.all("*", (req,res) => {
//     res.send("Sorry Page not found")
// })

// app.all("/api/*", (req, res) => {
//     res.send("API Page")
// })

// app.get("/ab?cd", (req, res) => {
//     res.send("This route path will match acd , abcd ")
// })

// app.get("/multiple", (req, res, next) => {
//     res.send("Call Back 1")
//     next()
// }, (req, res) => {
//     res.send("Call Back 2")
// })

// const aocb1 = (req, res, next) => {
//     console.log("First Call Back")
//     next()
// }

// const aocb2 = (req, res, next) => {
//     console.log("Second Call Back")
//     next()
// }

// const aocb3 = (req, res, next) => {
//     console.log("Third Call Back")
//     res.send("Third Call Back")

// }

// app.get("/aocb",[aocb1, aocb2,aocb3])

// Messy codes

// app.get("/student/all",(req, res)=> {
//     res.send("All Student")
// })

// app.post("/student/create",(req, res)=> {
//     res.send("New Student Created")
// })
// app.put("/student/update",(req, res)=> {
//     res.send("Student Updated")
// })
// app.delete("/student/delete",(req, res)=> {
//     res.send("Student Delete")
// })

//  New way

// app.use("/student", student)

// Dynamic route
// app.get("/dynamic/data/:id", (req, res) => {
//     res.send(`Dynamic Student Data is ${req.params.id}`)
// })

// app.get("/product/:category/:id", (req, res) => {
//     const { category, id } = req.params
//     res.send(`Product Category ${category} and Product ID: ${id}`)
// })

// Restrict Value
// app.get("/restrict/:id([0-9]{2})", (req, res) => {
//     res.send(`Restrict Value is ${req.params.id}`)
// })

// Query String
// app.get("/product ", (req, res) => {
//     console.log(req.query)
//     res.send("QUERY")
// })

// logic part
// app.get("/students/all/:id", (req, res) => {
//   console.log(req.params);
//   const { id } = req.params;
//   if (id === 10) {
//     res.send("Not Allowed");
//   } else {
//     res.send("Allow");
//   }
// });

// with Controller
// app.get("/students/all/:id", Page3Controller);

app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});

// brew services start mongodb - community@5.0
// start - stop
