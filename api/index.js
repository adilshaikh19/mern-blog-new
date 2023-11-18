const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users");
const bcrypt = require("bcryptjs");
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:5qLZ7Mg0yCIysSuf@cluster0.pcgknru.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(4000);
