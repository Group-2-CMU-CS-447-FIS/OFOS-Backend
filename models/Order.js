import sequelize from "../config/db.js";
import {DataTypes, Model} from "sequelize";

class Order extends Model {}

Order.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "1",
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        payment_method: {
            type: DataTypes.STRING,
            defaultValue: "COD",
        },
        note: {
            type: DataTypes.TEXT,
            defaultValue: null,
        },
    },
    {
        sequelize,
        modelName: "order",
    }
);

export default Order;
