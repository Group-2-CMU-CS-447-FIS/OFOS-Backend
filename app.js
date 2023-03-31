// const path = require("path");
// var fs = require("fs");
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import food from "./routes/food.js";
import order from "./routes/order.js";
import user from "./routes/user.js";
import category from "./routes/category.js";
import {notFound, errorHandler} from "./middlewares/error.js";
import addRelationship from "./models/relationship/relationship.js";
import path from "path";
import upload from "./routes/upload.js";
import payment from "./routes/payment.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
//const isProduction = process.env.NODE_ENV === "production";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

addRelationship();

app.use("/api/food", food);
app.use("/api/users", user);
app.use("/api/orders", order);
app.use("/api/category", category);
app.use("/api/uploads", upload);
app.use("/api/payment", payment);

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
