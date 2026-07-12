// Comment model
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: [true, "Comment message is required"],
            trim: true,
            minlength: [5, "Comment message must be at least 5 characters long"],
        },

        incidentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Incident",
            required: [true, "Incident ID is required"],
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User ID is required"],
        },
    },

    {
        // Time creation for incident
        timestamps: true,
    }
);

// Index for comments
commentSchema.index({ incidentId: 1 });
commentSchema.index({ userId: 1 });
commentSchema.index({ createdAt: -1 });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;