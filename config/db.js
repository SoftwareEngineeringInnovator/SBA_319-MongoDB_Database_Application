import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "cyber_incident_tracker"
        });

        console.log("MongoDB Connected");
        console.log("Database:", mongoose.connection.name);
    } catch (e) {
        console.error("MongoDB connection error:", e);
    }
}

export default connectDB;