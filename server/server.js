import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    })
  .catch((error)=> {
    console.log("Database Error:", error);
  });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  
    