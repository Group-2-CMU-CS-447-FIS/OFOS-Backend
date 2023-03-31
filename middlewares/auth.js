import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

const verifyUser = asyncHandler(async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.PRIVATE_KEY);

        if (!token) {
            res.status(401);
            throw new Error("Invalid Token");
        }

        req.user = await User.findByPk(decode, {
            attributes: ["id", "role"],
        });

        if (req.user) {
            next();
        } else {
            res.status(401);
            throw new Error("User not found!!");
        }
    } else {
        res.status(401);
        throw new Error("Please login first!!");
    }
});

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized.");
    }
};

const isStaff = (req, res, next) => {
    if (req.user && req.user.role !== "user") {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized.");
    }
};

export {verifyUser, isAdmin, isStaff};
