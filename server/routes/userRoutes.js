import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getCurrentUser,
  upgradePlan,
} from "../controllers/userController.js";

const router = express.Router();

router.get(
  "/me",
  protect,
  getCurrentUser
);

router.post(
  "/upgrade",
  protect,
  upgradePlan
);

export default router;