import Food from "../Food.js";
import User from "../User.js";
import Order from "../Order.js";
import OrderDetail from "../Order_Detail.js";
import Category from "../Category.js";

function addRelationship() {
    //user 1 - n order
    User.hasMany(Order);
    //food n - n order
    Order.belongsToMany(Food, {
        through: "order_details",
    });
    Food.belongsToMany(Order, {
        through: "order_details",
    });

    //food n - n category
    Food.belongsToMany(Category, {
        through: "food_categories",
    });
    Category.belongsToMany(Food, {
        through: "food_categories",
    });
}

export default addRelationship;
