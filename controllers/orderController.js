import asyncHandler from "express-async-handler";
import Food from "../models/Food.js";
import Order from "../models/Order.js";
import OrderDetail from "../models/Order_Detail.js";

const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.findAll({
        include: {
            model: Food,
            through: {
                attributes: [],
            },
        },
    });

    res.json(orders);
});

const getUserOrders = asyncHandler(async (req, res) => {
    const orders = await Order.findAll({
        where: {
            userId: req.params.id,
        },
        include: {
            model: Food,
            through: {
                attributes: [],
            },
        },
    });

    res.json(orders);
});

const createOrder = asyncHandler(async (req, res) => {
    const {userId, total, address, payment_method, note, foodItem, phone} =
        req.body;

    const order = await Order.create({
        userId,
        total,
        payment_method,
        address,
        note,
        phone,
    });

    if (Array.isArray(foodItem)) {
        foodItem.map(async (i) => {
            await OrderDetail.create({
                orderId: order.id,
                foodId: i.id,
                quantity: i.quantity,
                note: i.note,
            });
        });
    } else {
        await OrderDetail.create({
            orderId: order.id,
            foodId: foodItem.id,
            quantity: foodItem.quantity,
            note: foodItem.note,
        });
    }

    res.json(order);
});

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findByPk(req.params.id, {
        include: {
            model: Food,
            through: {
                attributes: [],
            },
        },
    });

    if (order) res.json(order);
    else throw new Error("Order not found");
});

//update neu khach hang thanh toan onl
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findByPk(req.params.id);
    if (order) {
        order.status = "Paid";
        order.save();
        res.json(order);
    } else throw new Error("Order not found");
});

const updateOrder = asyncHandler(async (req, res) => {
    const {total, address, payment_method, note, foodItem, phone} = req.body;

    const order = await Order.findByPk(req.params.id);

    if (order) {
        order.total = total || order.total;
        order.address = address || order.address;
        order.payment_method = payment_method || order.payment_method;
        order.note = note || order.note;
        order.phone = phone || order.phone;

        if (foodItem) {
            const items = Array.isArray(foodItem) ? foodItem : [foodItem];

            items.map(async (i) => {
                await OrderDetail.create({
                    orderId: order.id,
                    foodId: i.foodId,
                    quantity: i.quantity,
                });
            });
        }

        order.save();

        res.json(order);
    } else throw new Error("Order not found");
});

//admin and staff only
const updateOrderStatus = asyncHandler(async (req, res) => {
    const order = await Order.findByPk(req.params.id);
    if (order) {
        order.status = req.body.status;
        order.save();
        res.json(order);
    } else throw new Error("Order not found");
});

export {
    getAllOrders,
    getOrderById,
    getUserOrders,
    createOrder,
    updateOrder,
    updateOrderToPaid,
    updateOrderStatus,
};
