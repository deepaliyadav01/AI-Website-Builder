import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-website-builder-5yhxhsy5n-deepaliyadav01s-projects.vercel.app",
      "https://ai-website-builder-frontend-5yhxhsy5n-deepaliyadav01s-projects.vercel.app",
      "https://ai-website-builder-frontend-git-main-deepaliyadav01s-projects.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/project", projectRoutes);


app.get(
  "/api/protected",
  authMiddleware,
  (req, res) => {

    res.json({
      success: true,
      message: "Protected Route Accessed",
      user: req.user
    });

  }
);

app.get("/", (req, res) => {
  res.send("API Running");
});

// Global Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});