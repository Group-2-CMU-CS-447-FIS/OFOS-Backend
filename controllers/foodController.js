import asyncHandler from "express-async-handler";
import Food from "../models/Food.js";
import Category from "../models/Category.js";

const getAllFood = asyncHandler(async (req, res) => {
    const food = await Food.findAll({
        include: {
            model: Category,
            attributes: ["id", "name"],
            through: {
                attributes: [],
            },
        },
    });
    res.json(food);
});

const getFoodByID = asyncHandler(async (req, res) => {
    const food = await Food.findByPk(req.params.id, {
        include: {
            model: Category,
            through: {
                attributes: [],
            },
        },
    });

    if (food) res.json(food);
    else throw new Error("Food not found");
});

const getFoodByCategory = (req, res) => {
    res.json({
        message: "get products by Category",
    });
};

//admin only
const createFood = (req, res) => {
    res.json({product: "product created"});
};

const updateFood = (req, res) => {
    res.json({product: "product updated"});
};

const deleteFood = (req, res) => {
    res.json({product: "product deleted"});
};

export {getAllFood, getFoodByID, createFood, updateFood, deleteFood};
