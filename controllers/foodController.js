import asyncHandler from "express-async-handler";
import Food from "../models/Food.js";
import Category from "../models/Category.js";
import FoodCategory from "../models/Food_Category.js";

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

//admin only
const createFood = asyncHandler(async (req, res) => {
    const {name, description, image, price, price_sale, stock, category} =
        req.body;
    const food = await Food.create({
        name,
        description,
        image,
        price,
        price_sale,
        stock,
    });

    const categories = Array.isArray(category) ? category : [category];

    categories.map(async (c) => {
        await FoodCategory.create({
            foodId: food.id,
            categoryId: c,
        });
    });

    res.json(food);
});

const updateFood = asyncHandler(async (req, res) => {
    const {name, description, image, price, price_sale, stock, category} =
        req.body;

    const food = await Food.findByPk(req.params.id);

    if (food) {
        food.name = name || food.name;
        food.description = description || food.description;
        food.image = image || food.image;
        food.price = price || food.image;
        food.price_sale = price_sale || food.price_sale;
        food.stock = stock || food.stock;

        if (category) {
            await FoodCategory.destroy({
                where: {
                    foodId: req.params.id,
                },
            });

            const categories = Array.isArray(category) ? category : [category];

            categories.map(async (c) => {
                await FoodCategory.create({
                    foodId: food.id,
                    categoryId: c,
                });
            });

            food.save();

            res.json("Food updated");
        }
    } else throw new Error("Food not found");
});

const deleteFood = asyncHandler(async (req, res) => {
    await Food.destroy({
        where: {
            id: req.params.id,
        },
    });

    await FoodCategory.destroy({
        where: {
            foodId: req.params.id,
        },
    });

    res.json({message: "Food deleted"});
});

export {getAllFood, getFoodByID, createFood, updateFood, deleteFood};
