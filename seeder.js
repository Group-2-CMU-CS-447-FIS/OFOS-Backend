import User from "./models/User.js";
import Food from "./models/Food.js";
import Order from "./models/Order.js";
import OrderDetail from "./models/OrderDetail.js";
import Category from "./models/Category.js";
import dotenv from "dotenv";
import DummyUser from "./data/user.js";
import DummyFood from "./data/food.js";

dotenv.config();

async function importData() {
    await User.sync();
    await Food.sync();
    await OrderDetail.sync();
    await Order.sync();
    await Category.sync();

    const users = await User.bulkCreate(DummyUser);
    const food = await Food.bulkCreate(DummyFood);
    //const users = await User.findAll({});
    process.exit(1);
}

async function destroyData() {
    await User.drop();
    await Food.drop();
    await Order.drop();
    await OrderDetail.drop();
    await Category.drop();
    process.exit(1);
}

process.argv[2] === "-d" ? destroyData() : importData();
