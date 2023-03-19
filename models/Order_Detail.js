import sequelize from "../config/db.js";
import {DataTypes, Model} from "sequelize";

class OrderDetail extends Model {}

OrderDetail.init(
    {
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        foodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                isGreaterThanZero(value) {
                    if (value === null || value <= 0) {
                        throw new Error("Quantity must be greater than zero.");
                    }
                },
            },
        },
        note: {
            type: DataTypes.TEXT,
            defaultValue: "",
        },
    },
    {
        sequelize,
        modelName: "order_Detail",
    }
);

export default OrderDetail;
