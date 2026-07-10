// Incident model
import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema(
  {
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

    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Phishing",
        "Malware",
        "Unauthorized Access",
        "Data Exposure",
        "Network Issue",
        "Other",
      ],
      default: "Other",
    },

    reportedBy: {
      type: String,
      required: [true, "Reporter name is required"],
      trim: true,
    },

    assignedTo: {
      type: String,
      default: "Unassigned",
      trim: true,
    },

    affectedSystem: {
      type: String,
      required: [true, "Affected system is required"],
      trim: true,
    },

    resolutionNotes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    // Time creation for incident
    timestamps: true,
  }
);

// Index Schema to find tickets
incidentSchema.index({ severity: 1 });
incidentSchema.index({ status: 1 });
incidentSchema.index({ category: 1 });
incidentSchema.index({ createdAt: -1 });

const Incident = mongoose.model("Incident", incidentSchema);

export default Incident;