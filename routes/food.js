import express from "express";
import {
    getAllProducts,
    getProductByID,
    getProductByCategory,
} from "../controllers/foodController.js";

const route = express.Router();

route.get("/", getAllProducts);
route.get("/:id", getProductByID);
route.get("/:category", getProductByCategory);

export default route;
