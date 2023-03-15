import sequelize from "../config/db.js";
import {DataTypes, Model} from "sequelize";

class Category extends Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "category",
    }
);

export default Category;
