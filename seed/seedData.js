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

    console.log("Old users, incidents, and comments removed.");

    const users = await User.insertMany([
      {
        name: "Fredy Chilito",
        email: "fredy.chilito@example.com",
        role: "SOC Analyst",
        department: "Cybersecurity",
      },
      {
        name: "Samuel Adams",
        email: "samuel.adams@example.com",
        role: "Reporter",
        department: "IT",
      },
      {
        name: "Maria Rivera",
        email: "maria.rivera@example.com",
        role: "Manager",
        department: "Operations",
      },
      {
        name: "James Carter",
        email: "james.carter@example.com",
        role: "SOC Analyst",
        department: "Cybersecurity",
      },
      {
        name: "Linda Green",
        email: "linda.green@example.com",
        role: "Reporter",
        department: "Finance",
      },
      {
        name: "Robert Smith",
        email: "robert.smith@example.com",
        role: "Admin",
        department: "Infrastructure",
      },
      {
        name: "Ana Lopez",
        email: "ana.lopez@example.com",
        role: "Reporter",
        department: "Human Resources",
      },
      {
        name: "Kevin Brown",
        email: "kevin.brown@example.com",
        role: "SOC Analyst",
        department: "Cybersecurity",
      },
      {
        name: "Diana Torres",
        email: "diana.torres@example.com",
        role: "Manager",
        department: "Compliance",
      },
      {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        role: "Reporter",
        department: "Customer Support",
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
      {
        title: "Malware Alert Detected",
        description: "Antivirus software detected possible malware on a workstation.",
        severity: "High",
        status: "In Progress",
        category: "Malware",
        reportedBy: "Linda Green",
        assignedTo: "James Carter",
        affectedSystem: "Finance Workstation",
        resolutionNotes: "Device was isolated from the network.",
      },
      {
        title: "Unauthorized Login Attempt",
        description: "Multiple failed login attempts were detected from an unknown IP address.",
        severity: "High",
        status: "Open",
        category: "Unauthorized Access",
        reportedBy: "Ana Lopez",
        assignedTo: "Kevin Brown",
        affectedSystem: "VPN Portal",
        resolutionNotes: "User account is being reviewed.",
      },
      {
        title: "Shared Folder Exposure",
        description: "A shared folder was found with sensitive files available to the wrong group.",
        severity: "Critical",
        status: "In Progress",
        category: "Data Exposure",
        reportedBy: "Diana Torres",
        assignedTo: "SOC Team",
        affectedSystem: "Shared Drive",
        resolutionNotes: "Permissions are being corrected.",
      },
      {
        title: "Network Traffic Spike",
        description: "Monitoring tools detected unusual outbound traffic from an internal server.",
        severity: "Medium",
        status: "Open",
        category: "Network Issue",
        reportedBy: "Robert Smith",
        assignedTo: "Infrastructure Team",
        affectedSystem: "Application Server",
        resolutionNotes: "Traffic logs are being reviewed.",
      },
      {
        title: "Suspicious Attachment Opened",
        description: "A user opened an attachment from an unknown sender and reported it later.",
        severity: "Medium",
        status: "Resolved",
        category: "Phishing",
        reportedBy: "Michael Johnson",
        assignedTo: "Fredy Chilito",
        affectedSystem: "Customer Support Laptop",
        resolutionNotes: "Device scan completed and no malware was found.",
      },
      {
        title: "Admin Account Lockout",
        description: "An administrator account was locked after several failed sign-in attempts.",
        severity: "High",
        status: "Closed",
        category: "Unauthorized Access",
        reportedBy: "Robert Smith",
        assignedTo: "Kevin Brown",
        affectedSystem: "Admin Portal",
        resolutionNotes: "Password was reset and MFA was verified.",
      },
      {
        title: "Endpoint Protection Warning",
        description: "Endpoint protection reported suspicious behavior on a user laptop.",
        severity: "Low",
        status: "Resolved",
        category: "Malware",
        reportedBy: "Maria Rivera",
        assignedTo: "James Carter",
        affectedSystem: "Operations Laptop",
        resolutionNotes: "False positive confirmed after review.",
      },
      {
        title: "Possible Data Download",
        description: "Large file downloads were detected from a user account after business hours.",
        severity: "Critical",
        status: "In Progress",
        category: "Data Exposure",
        reportedBy: "Diana Torres",
        assignedTo: "Compliance Team",
        affectedSystem: "Document Management System",
        resolutionNotes: "Investigation is ongoing.",
      },
      {
        title: "Firewall Rule Review",
        description: "A firewall rule allowed more access than expected and needs review.",
        severity: "Low",
        status: "Open",
        category: "Network Issue",
        reportedBy: "Robert Smith",
        assignedTo: "Infrastructure Team",
        affectedSystem: "Firewall",
        resolutionNotes: "Rule review scheduled.",
      },
    ]);

    console.log(`${incidents.length} incidents inserted.`);

    const comments = await Comment.insertMany([
      {
        message: "The incident was received and assigned for review.",
        incidentId: incidents[0]._id,
        userId: users[0]._id,
      },
      {
        message: "The suspicious email headers were collected for analysis.",
        incidentId: incidents[0]._id,
        userId: users[3]._id,
      },
      {
        message: "The affected workstation was disconnected from the network.",
        incidentId: incidents[1]._id,
        userId: users[3]._id,
      },
      {
        message: "Login logs were exported for the security review.",
        incidentId: incidents[2]._id,
        userId: users[7]._id,
      },
      {
        message: "Folder permissions were updated to reduce exposure.",
        incidentId: incidents[3]._id,
        userId: users[8]._id,
      },
      {
        message: "Network traffic logs are being compared against normal activity.",
        incidentId: incidents[4]._id,
        userId: users[5]._id,
      },
      {
        message: "Endpoint scan completed and no active threat was found.",
        incidentId: incidents[5]._id,
        userId: users[0]._id,
      },
      {
        message: "MFA status was verified for the admin account.",
        incidentId: incidents[6]._id,
        userId: users[7]._id,
      },
      {
        message: "The alert was reviewed and marked as a false positive.",
        incidentId: incidents[7]._id,
        userId: users[3]._id,
      },
      {
        message: "Additional review is needed for after-hours file activity.",
        incidentId: incidents[8]._id,
        userId: users[8]._id,
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