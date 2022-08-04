const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: "string", required: true },
    indentity: { type: "string", required: true },
    password: { type: "string", required: true },
  },
  { timestamp: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
