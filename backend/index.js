const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

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
const usersRoutes = require("./routes/users");

app.use("/api/v1/students", studentsRoutes);
app.use("/api/v1/users", usersRoutes);

app.listen(process.env.PORT);
