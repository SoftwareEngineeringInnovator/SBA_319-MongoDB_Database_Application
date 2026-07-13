# SBA 319 - MongoDB Database Application

## Cybersecurity Incident Tracker API

This project is a backend API built with **Node.js**, **Express**, **MongoDB Atlas**, and **Mongoose**.

The application is a **Cybersecurity Incident Tracker API**. It allows users to create and manage cybersecurity incident tickets, store user information, and add comments or updates to incidents.

This project does not include a frontend. All routes were tested using **Thunder Client** in VS Code.

---

## Project Purpose

The purpose of this project is to practice working with:

- Node.js and Express
- MongoDB Atlas
- Mongoose models and schemas
- CRUD API routes
- Multiple MongoDB collections
- Data relationships using ObjectId references
- MongoDB indexes
- MongoDB database-side validation
- Seed data for sample database records

---

## Technologies Used

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
- Thunder Client
- Git and GitHub

---

## Database Name

```text
cyber_incident_tracker
```

---

## Collections Used

This project uses three MongoDB collections:

| Collection | Purpose |
|---|---|
| `incidents` | Stores cybersecurity incident tickets |
| `users` | Stores users who report or work on incidents |
| `comments` | Stores comments or updates related to incidents |

---

## Data Modeling

The project uses a simple data model that connects the collections together.

### Incidents

The `incidents` collection stores the main cybersecurity ticket information.

Example fields:

- `title`
- `description`
- `severity`
- `status`
- `category`
- `reportedBy`
- `assignedTo`
- `affectedSystem`
- `resolutionNotes`

### Users

The `users` collection stores people who can report or help manage incidents.

Example fields:

- `name`
- `email`
- `role`
- `department`

### Comments

The `comments` collection stores notes or updates related to incident tickets.

Each comment connects to:

- one incident using `incidentId`
- one user using `userId`

This means a comment can show which incident it belongs to and which user added the comment.

---
## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/SoftwareEngineeringInnovator/SBA_319-MongoDB_Database_Application.git
```

### 2. Move into the project folder

```bash
cd SBA_319-MongoDB_Database_Application
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the root of the project.

Add your MongoDB Atlas connection string:

```env
MONGO_URI=your_mongodb_connection_string_here
```

Example format:

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/cyber_incident_tracker?retryWrites=true&w=majority&appName=Cluster0
```

### 5. Run the seed script

```bash
npm run seed
```

### 6. Start the server

```bash
npm run dev
```

Or:

```bash
nodemon
```

The server should run on:

```text
http://localhost:3000
```

---

## Thunder Client Testing

The API was tested using Thunder Client.

Main routes tested:

- `GET /`
- `GET /api/incidents`
- `GET /api/incidents/:id`
- `POST /api/incidents`
- `PATCH /api/incidents/:id`
- `DELETE /api/incidents/:id`
- `GET /api/users`
- `POST /api/users`
- `GET /api/comments`
- `POST /api/comments`
- `POST /api/incidents/test-db-validation`

---

## Project Notes

This project was developed step by step with frequent Git commits.

The main focus was to complete the required backend functionality first, including:

- three MongoDB collections
- CRUD routes
- data validation
- indexes
- sample data
- README documentation

---

## Author

Fredy Chilito
Software Engineering Student
Created as part of the Per Scholas Software Engineering Program.
Project: SBA_319-MongoDB_Database_Application