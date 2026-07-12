// Comment routes
import express from "express";
import Comment from "../models/Comments.js";

const router = express.Router();

// GET comment route
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find()
    // Following the Mongoose populate documentation, this lets us show helpful user and incident details instead of only returning their ObjectId values.
      .populate("incidentId", "title severity status")
      .populate("userId", "name email role");

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: "Error getting comments",
      error: error.message,
    });
  }
});

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