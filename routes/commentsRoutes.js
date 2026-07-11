// Comment routes
import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// POST comment route
router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);

    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({
      message: "Error creating comment",
      error: error.message,
    });
  }
});

export default router;