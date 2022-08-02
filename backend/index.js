const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());

app.get("/students/list", function (req, res) {
  res.send("Get All students");
});

// POST method route
app.post("/students/create", function (req, res) {
  const user = req.body;
  res.send("Student " + user.firstName + " " + user.lastName + " created");
});

// PUT method route
app.put("/students/update/:studentId", function (req, res) {
  const studentId = req.params.studentId;
  res.send("Aymard modify data of a student Id : " + studentId);
});

// DELETE method route
app.delete("/students/delete/:studentId", function (req, res) {
  const studentId = req.params.studentId;
  res.send("Coulibaly delete student " + studentId);
});

app.listen(5000);
