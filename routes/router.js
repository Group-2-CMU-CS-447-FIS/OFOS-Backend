const express = require("express");
const route = express.Router();
const exampleRoute = require("./example");

route.get("/", (req, res) => {
  res.send("API Route!");
});
route.use("/example", exampleRoute);

module.exports = route;
