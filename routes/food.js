import express from "express";
import {
    getAllFood,
    getFoodByID,
    createFood,
    updateFood,
    deleteFood,
} from "../controllers/foodController.js";

const route = express.Router();

route.get("/", getAllFood);
route.get("/:id", getFoodByID);
//route.get("/:category", getFoodByCategory);

export default route;
