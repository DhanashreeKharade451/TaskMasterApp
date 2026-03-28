import express from "express";
import User from "../models/user.js";
import { signToken } from "../utils/auth.js";

const router = express.Router();

// POST /api/users/register - Create a new user

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);

    const newUser = await User.create(req.body);
    console.log(newUser);

    const token = signToken(newUser);
    res.status(201).json({ token, newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Post/api/user/login  --- login with valid credentials

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }
    const correctPassword = await user.isCorrectPassword(req.body.password);

    if (!correctPassword) {
      return res.status(400).json({ message: "wrong password" });
    }

    const token = signToken(user);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
