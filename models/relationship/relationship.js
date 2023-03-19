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
        through: "Order_Details",
    });
    Food.belongsToMany(Order, {
        through: "Order_Details",
    });

    //food n - n category
    Food.belongsToMany(Category, {
        through: "Food_Categories",
    });
    Category.belongsToMany(Food, {
        through: "Food_Categories",
    });
}

export default addRelationship;
