const router = require("express").Router();
const User = require("../models/User");

router.get("/list", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users);
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
});

module.exports = router;
