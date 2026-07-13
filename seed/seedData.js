// Seed data, adds sample users, incidents, and comments to the database.
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "cyber_incident_tracker",
        });

        console.log("MongoDB connected for seeding.");

        // Clears the old data
        await User.deleteMany();

        console.log("Old users removed");

        const users = await User.insertMany([
            {
                name: "Fredy Chilito",
                email: "fredy.chilito@example.com",
                role: "SOC Analyst",
                department: "Cybersecurity",
            },
        ]);

        console.log("Seed data completed successfully.");
    } catch (error) {
        console.error("Seed data error:", error.message);
    } finally {
        await mongoose.disconnect();
        console.log("MongoDB disconnected.");
    }
};

seedDatabase();