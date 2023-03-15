import {Model, DataTypes} from "sequelize";
import sequelize from "../config/db.js";

class User extends Model {}

User.init(
    {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
        },
    },
    {sequelize, modelName: "user"}
);

export default User;
