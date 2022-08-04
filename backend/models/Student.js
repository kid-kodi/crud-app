const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    firstName: { type: "string", required: true },
    lastName: { type: "string", required: true },
  },
  { timestamp: true }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
