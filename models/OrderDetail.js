import sequelize from "../config/db.js";
import {DataTypes, Model} from "sequelize";

class OrderDetail extends Model {}

OrderDetail.init(
    {
        order_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        food_id: {
            type: DataTypes.UUID,
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
        modelName: "order-detail",
    }
);

export default OrderDetail;
