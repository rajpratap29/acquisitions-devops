import express from "express";

import {
  fetchAllUsers,
  fetchUserById,
  updateUserById,
  deleteUserById,
} from "#controllers/users.controller.js";
import { authenticateToken, requireRole } from "#middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authenticateToken, requireRole(["admin"]), fetchAllUsers);

router.get("/:id", authenticateToken, requireRole(["admin"]), fetchUserById);

router.put("/:id", authenticateToken, requireRole(["admin"]), updateUserById);

router.delete(
  "/:id",
  authenticateToken,
  requireRole(["admin"]),
  deleteUserById
);

export default router;
