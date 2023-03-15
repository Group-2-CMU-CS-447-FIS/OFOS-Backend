// const path = require("path");
// var fs = require("fs");
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import food from "./routes/food.js";
import order from "./routes/order.js";
import user from "./routes/user.js";
import {notFound, errorHandler} from "./middlewares/error.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
//const isProduction = process.env.NODE_ENV === "production";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/food", food);
app.use("/api/users", user);
app.use("/api/orders", order);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
