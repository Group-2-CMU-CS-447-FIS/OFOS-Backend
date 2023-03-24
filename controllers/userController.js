import User from "../models/User.js";
import bcrypt from "bcrypt";
import genToken from "../utils/genToken.js";
import asyncHandler from "express-async-handler";
import Order from "../models/Order.js";

const register = asyncHandler(async (req, res) => {
    const {fullName, email, password, phone} = req.body;
    const existUser = await User.findOne({
        where: {
            email: email,
        },
    });
    if (existUser) throw new Error("This email has been used");
    else {
        const createUser = await User.create({
            full_name: fullName,
            email,
            password,
            phone,
        });
        const token = genToken(createUser.id);
        res.json({
            token: token,
            fullName: createUser.full_name,
            email: createUser.email,
            role: createUser.role,
            phone: createUser.phone,
        });
    }
});

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    console.log(email);
    const user = await User.findOne({
        where: {
            email: email,
        },
    });
    if (user) {
        const isPassword = await bcrypt.compare(password, user.password);
        if (isPassword) {
            const token = genToken(user.id);
            res.json({
                full_name: user.full_name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                token,
            });
        } else throw new Error("Wrong password, please try again.");
    } else throw new Error("User not found");
});

const getUserProfile = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id, {
        attributes: ["id", "email", "full_name", "phone", "role"],
        include: {
            model: Order,
            attributes: ["id", "status", "address", "phone", "total"],
        },
    });
    if (user) res.json(user);
    else throw new Error("User not found");
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const {full_name, email, phone, password} = req.body;
    const user = await User.findByPk(id);
    if (user) {
        user.full_name = full_name || user.full_name;
        user.email = email || user.email;
        user.phone = phone || user.phone;

        if (password) {
            user.password = password;
        }

        const updateUser = await user.save();

        res.json(updateUser);
    } else {
        throw new Error("User not found");
    }
});

//admin only
const updateUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const {full_name, email, phone, password, role} = req.body;
    const user = await User.findByPk(id);
    if (user) {
        user.full_name = full_name || user.full_name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        user.role = role || user.role;

        if (password) {
            user.password = password;
        }

        const updateUser = await user.save();

        res.json(updateUser);
    } else {
        throw new Error("User not found");
    }
});

const getAllUsers = async (req, res) => {
    const users = await User.findAll({
        attributes: ["id", "email", "full_name", "phone", "role"],
    });
    res.json(users);
};

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (user) {
        user.destroy();

        await Order.destroy({
            where: {
                userId: user.id,
            },
        });

        res.json({message: "User deleted"});
    } else throw new Error("User not found");
});

export {
    getAllUsers,
    getUserProfile,
    register,
    updateUser,
    updateUserProfile,
    deleteUser,
    login,
};
