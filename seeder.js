import User from "./models/User.js";
import Food from "./models/Food.js";
import Order from "./models/Order.js";
import OrderDetail from "./models/Order_Detail.js";
import Category from "./models/Category.js";
import dotenv from "dotenv";
import DummyUser from "./data/user.js";
import DummyFood from "./data/food.js";
import sequelize from "./config/db.js";
import addRelationship from "./models/relationship/relationship.js";
import DummyOrder from "./data/order.js";
import DummyCategory from "./data/category.js";
import FoodCategory from "./models/Food_Category.js";
import food_category from "./data/food_category.js";

async function importData() {
    await sequelize
        .sync({force: false})
        .catch((error) => console.log(error.message));
    addRelationship();

    //await User.bulkCreate(DummyUser);
    //await Food.bulkCreate(DummyFood);
    //await Category.bulkCreate(DummyCategory);
    //await Order.bulkCreate(DummyOrder);
    await FoodCategory.beforeBulkCreate(food_category);

    process.exit(1);
}

async function destroyData() {
    await sequelize.drop();
    process.exit(1);
}

process.argv[2] === "-d" ? destroyData() : importData();
