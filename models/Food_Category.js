import {DataTypes, Model} from "sequelize";
import sequelize from "../config/db.js";

class FoodCategory extends Model {}

FoodCategory.init(
    {
        foodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "food_category",
    }
);

export default FoodCategory;
