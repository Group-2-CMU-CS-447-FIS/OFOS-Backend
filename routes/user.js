import express from "express";
import {
    deleteUser,
    getAllUsers,
    getUserProfile,
    login,
    register,
    updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(register).get(getAllUsers);
router
    .route("/:id")
    .get(getUserProfile)
    .patch(updateUserProfile)
    .delete(deleteUser);
router.post("/login", login);

export default router;
