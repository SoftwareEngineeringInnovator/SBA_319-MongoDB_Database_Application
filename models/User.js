// User model will use this interface to report incidents
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "User name is required"],
            trim: true,
        },

        email: {
            type: String,
            required: [true, "User email is required"],
            trim: true,
            lowercase: true,
            unique: true,
        },

        role: {
            type: String,
            required: [true, "User role is required"],
            enum: ["Reporter", "SOC Analyst", "Manager", "Admin"],
            default: "Reporter",
        },

        department: {
            type: String,
            required: [true, "Department is required"],
            trim: true,
        },

    },

    {
        // Time creation for incident
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;