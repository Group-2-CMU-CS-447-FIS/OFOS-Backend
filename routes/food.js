import express from "express";
import {
    getAllFood,
    getFoodByID,
    createFood,
    updateFood,
    deleteFood,
} from "../controllers/foodController.js";

const route = express.Router();

route.route("/").get(getAllFood).post(createFood);
route.route("/:id").get(getFoodByID).delete(deleteFood).patch(updateFood);

export default route;
