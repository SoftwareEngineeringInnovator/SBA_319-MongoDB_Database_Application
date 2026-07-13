// Seed data, adds sample users, incidents, and comments to the database.
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import Incident from "../models/Incident.js";
import Comment from "../models/Comments.js";

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "cyber_incident_tracker",
        });

        console.log("MongoDB connected for seeding.");

        // Clears the old data
        await User.deleteMany();
        await Incident.deleteMany();
        await Comment.deleteMany();

        console.log("Old users, incidents, and comments removed");

        const users = await User.insertMany([
            {
                name: "Fredy Chilito",
                email: "fredy.chilito@example.com",
                role: "SOC Analyst",
                department: "Cybersecurity",
            },
        ]);

        console.log(`${users.length} users inserted.`);

        const incidents = await Incident.insertMany([
            {
                title: "Phishing Email Reported",
                description: "A user reported a suspicious email asking for password reset information.",
                severity: "Medium",
                status: "Open",
                category: "Phishing",
                reportedBy: "Samuel Adams",
                assignedTo: "SOC Team",
                affectedSystem: "Employee Email",
                resolutionNotes: "Initial review started.",
            },
        ]);

        console.log(`${incidents.length} incidents inserted.`);

        const comments = await Comment.insertMany([
      {
        message: "The incident was received and assigned for review.",
        incidentId: incidents[0]._id,
        userId: users[0]._id,
      },
    ]);

    console.log(`${comments.length} comments inserted.`);

        console.log("Seed data completed successfully.");
    } catch (error) {
        console.error("Seed data error:", error.message);
    } finally {
        await mongoose.disconnect();
        console.log("MongoDB disconnected.");
    }
};

seedDatabase();