const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "andfakseaia2484asd14";

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3001", "http://localhost:4000"],
  })
);
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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000);
