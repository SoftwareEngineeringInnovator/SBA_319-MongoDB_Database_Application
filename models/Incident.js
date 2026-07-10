// Incident model
import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Incident title is required"],
    trim: true,
    minlength: [5, "Title must be at least 5 characters long"],
  },

  description: {
    type: String,
    required: [true, "Incident description is required"],
    trim: true,
    minlength: [10, "Description must be at least 10 characters long"],
  },

  severity: {
    type: String,
    required: [true, "Severity is required"],
    enum: ["Low", "Medium", "High", "Critical"],
    default: "Low",
  },
});

const Incident = mongoose.model("Incident", incidentSchema);

export default Incident;