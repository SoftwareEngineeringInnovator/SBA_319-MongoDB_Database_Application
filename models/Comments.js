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
    },

    {
        // Time creation for incident
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;