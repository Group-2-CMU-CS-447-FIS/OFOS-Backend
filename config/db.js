import {Sequelize} from "sequelize";

const sequelize = new Sequelize("food_ordering_system", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
    query: {
        nest: true,
    },
});

await sequelize.authenticate();
console.log("Database connected");

export default sequelize;
