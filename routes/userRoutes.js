// User routes
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST user route
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
    });
  }
});

export default router;