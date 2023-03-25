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
import {isAdmin, isStaff, verifyUser} from "../middlewares/auth.js";

const router = express.Router();

router.post("/", verifyUser, createOrder);

router.route("/user/:id").get(verifyUser, getUserOrders);
router
    .route("/:id")
    .get(verifyUser, getOrderById)
    .patch(verifyUser, updateOrder);

router.patch("/paid/:id", verifyUser, updateOrderToPaid);
router.patch("/status/:id", verifyUser, isStaff, updateOrderStatus);

router.route("/admin").get(verifyUser, isAdmin, getAllOrders);
router.patch("/admin/:id", verifyUser, isAdmin, updateOrder);

export default router;
