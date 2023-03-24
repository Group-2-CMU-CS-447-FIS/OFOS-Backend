import express from "express";
import {
    createOrder,
    getAllOrders,
    getOrderById,
    getUserOrders,
    updateOrder,
    updateOrderStatus,
    updateOrderToPaid,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrder);

router.route("/user/:id").get(getUserOrders);
router.route("/:id").get(getOrderById).patch(updateOrder);

router.patch("/paid/:id", updateOrderToPaid);
router.patch("/status/:id", updateOrderStatus);

export default router;
