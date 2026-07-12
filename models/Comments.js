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
    },

    {
        // Time creation for incident
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;