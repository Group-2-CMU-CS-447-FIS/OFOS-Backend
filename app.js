const path = require("path");
var fs = require("fs");
const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === "production";

const app = express();
// app.use(cors());

app.use("/api", router);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
