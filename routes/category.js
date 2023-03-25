import express from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getFoodByCategory,
    updateCategory,
} from "../controllers/categoryController.js";
import {isAdmin, verifyUser} from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllCategories);

router.get("/:id", getFoodByCategory);

router.post("/admin", verifyUser, isAdmin, updateCategory);

router
    .route("/admin/:id")
    .patch(verifyUser, isAdmin, updateCategory)
    .delete(verifyUser, isAdmin, deleteCategory);

export default router;
