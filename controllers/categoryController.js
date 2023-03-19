import Category from "../models/Category.js";
import asyncHandler from "express-async-handler";
import Food from "../models/Food.js";

const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.findAll({});
    res.json(categories);
});

const getFoodByCategory = asyncHandler(async (req, res) => {
    const food = await Category.findByPk(req.params.id, {
        include: {
            model: Food,
            through: {
                attributes: [],
            },
        },
    });

    if (food) {
        res.json(food.food);
    } else throw new Error("Category not found.");
});

//admin only
const createCategory = asyncHandler(async (req, res) => {
    const {name} = req.body;

    const category = await Category.create({name});

    res.json(category);
});

const updateCategory = asyncHandler(async (req, res) => {
    const {name} = req.body;

    const category = await Category.findByPk(req.params.id);
    if (category) {
        category.name = name;

        category.save();

        res.json(category);
    } else throw new Error("Category not found");
});

const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    if (category) {
        category.destroy();

        res.json({message: "Category deleted!!"});
    } else throw new Error("Category not found");
});

export {
    getAllCategories,
    updateCategory,
    deleteCategory,
    createCategory,
    getFoodByCategory,
};
