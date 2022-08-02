const router = require("express").Router();
const Student = require("../models/Student");

router.get("/list", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(201).send(students);
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
});

// POST method route
router.post("/create", async (req, res) => {
  try {
    const user = req.body;
    const student = new Student(user);
    await student.save();
    res.send("Student " + user.firstName + " " + user.lastName + " created");
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
});

// PUT method route
router.put("/update/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findByIdAndUpdate(studentId, {
      $set: req.body,
    });
    res.status(201).send(student);
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
});

// DELETE method route
router.delete("/delete/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    await Student.findByIdAndDelete(studentId);
    res.status(201).send(studentId);
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
});

module.exports = router;
