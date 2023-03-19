import express from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getFoodByCategory,
    updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);

router
    .route("/:id")
    .patch(updateCategory)
    .delete(deleteCategory)
    .get(getFoodByCategory);

export default router;
