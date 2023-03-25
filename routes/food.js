import express from "express";
import {
    getAllFood,
    getFoodByID,
    createFood,
    updateFood,
    deleteFood,
} from "../controllers/foodController.js";
import {isAdmin, verifyUser} from "../middlewares/auth.js";

const route = express.Router();

route.get("/", getAllFood);

route.get("/:id", getFoodByID);

route.post("/admin", verifyUser, isAdmin, createFood);

route
    .route("/admin/:id")
    .delete(verifyUser, isAdmin, deleteFood)
    .patch(verifyUser, isAdmin, updateFood);

export default route;
