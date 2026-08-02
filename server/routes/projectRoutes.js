import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  saveProject,
  getProjects,
  deleteProject,
  updateProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.post(
  "/save",
  authMiddleware,
  saveProject
);

router.get(
  "/my-projects",
  authMiddleware,
  getProjects
);

router.delete(
  "/delete/:id",
  authMiddleware,
  deleteProject
);

router.put(
  "/update/:id",
  authMiddleware,
  updateProject
);

export default router;