// SBA 319 - MongoDB Database Application - Cybersecurity Incident Tracker API
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import incidentRoutes from "./routes/incidentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentsRoutes.js";

// Loads the environment variables from the .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT;

// parse the data to JSON (for POST and PUT requests)
app.use(express.json());

// Confirms the API is running
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Cybersecurity Incident Tracker API",
    status: "Server is running successfully",
  });
});

// Incident routes
app.use("/api/incidents", incidentRoutes);

// User routes
app.use("/api/users", userRoutes);

// Comment routes
app.use("/api/comments", commentRoutes);

// error handling middleware
app.use((err, req, res, next) => {
    res.status(400).json({ error: err.message })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});