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

// PATCH incident route
router.patch("/:id", async (req, res) => {
    try {
        const updatedIncident = await Incident.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                // Validate the incident level for tickets
                new: true,
                runValidators: true,
            }
        );

        if (!updatedIncident) {
            return res.status(404).json({
                message: "Incident not found",
            });
        }

        res.status(200).json(updatedIncident);
    } catch (error) {
        res.status(400).json({
            message: "Error updating incident",
            error: error.message,
        });
    }
});

// DELETE incident route
router.delete("/:id", async (req, res) => {
    try {
        const deletedIncident = await Incident.findByIdAndDelete(req.params.id);

        if (!deletedIncident) {
            return res.status(404).json({
                message: "Incident not found",
            });
        }

        res.status(200).json({
            message: "Incident deleted successfully",
            deletedIncident,
        });
   } catch (error) {
    res.status(400).json({
      message: "Error deleting incident",
      error: error.message,
    });
  }
});

// Test route for MongoDB validation
router.post("/test-db-validation", async (req, res) => {
  try {
    const result = await Incident.collection.insertOne(req.body);

    res.status(201).json({
      message: "Incident ticket passed MongoDB validation and was submitted successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    res.status(400).json({
      message: "Incident ticket did not pass MongoDB validation. Please check the required fields and try again",
      error: error.message,
    });
  }
});

export default router;