import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.status(200).json({ message: "Authenticated" });
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.status(200).json({ message: "Authenticated" });
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.status(200).json({ message: "Authenticated" });
// });

// UPDATE USER
router.put("/:id", verifyUser, updateUser);

// DELETE USER
router.delete("/:id", verifyUser, deleteUser);

// GET USER
router.get("/:id", verifyUser, getUser);

// GET ALL USERS
router.get("/", verifyAdmin, getUsers);

export default router;
