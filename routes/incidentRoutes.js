// Incident routes- Test the Incident model using Thunder Client
import express from "express";
import mongoose from "mongoose";
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

// GET one incident by ID
router.get("/:id", async (req, res) => {
  try {

    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      return res.status(404).json({
        message: "Incident not found",
      });
    }

    res.status(200).json(incident);
  } catch (error) {
    res.status(404).json({
      message: "Wrong Incident Number",
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