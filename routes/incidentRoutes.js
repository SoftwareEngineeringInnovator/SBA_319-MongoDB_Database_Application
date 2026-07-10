// Incident routes- Test the Incident model using Thunder Client
import express from "express";
import Incident from "../models/Incident.js";

const router = express.Router();

// GET incidents route
router.get("/", async (req, res) => {
  try {
    const incidents = await Incident.find();

    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({
      message: "Error getting incidents",
      error: error.message,
    });
  }
});

// POST incident route
router.post("/", async (req, res) => {
  try {
    const newIncident = await Incident.create(req.body);

    res.status(201).json(newIncident);
  } catch (error) {
    res.status(400).json({
      message: "Error creating incident",
      error: error.message,
    });
  }
});

export default router;