import express from "express";
import {
    deleteUser,
    getAllUsers,
    getUserProfile,
    login,
    register,
    updateUserProfile,
    updateUser,
} from "../controllers/userController.js";
import {isAdmin, verifyUser} from "../middlewares/auth.js";

const router = express.Router();

router.post("/", register);

router
    .route("/:id")
    .get(verifyUser, getUserProfile)
    .patch(verifyUser, updateUserProfile);

router.post("/login", login);

router.get("/admin", verifyUser, isAdmin, getAllUsers);
router
    .route("/admin/:id")
    .delete(verifyUser, isAdmin, deleteUser)
    .patch(verifyUser, isAdmin, updateUser);

export default router;
