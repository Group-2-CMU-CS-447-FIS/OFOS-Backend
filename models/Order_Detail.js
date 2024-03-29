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
            defaultValue: 1,
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
        // price: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 555,
        // },
    },
    {
        sequelize,
        modelName: "order_detail",
    }
);

export default OrderDetail;
