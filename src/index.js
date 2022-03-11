const express = require("express");

const productsController = require("./controllers/product.controllers");

const app = express();

app.use(express.json());

app.use("/users", productsController);

module.exports = app;
