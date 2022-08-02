const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to Mongoose");
  }
);

app.use(express.json());

const studentsRoutes = require("./routes/students");

app.use("/api/v1/students", studentsRoutes);

app.listen(process.env.PORT);
