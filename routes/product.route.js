const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const productController = require('../controller/product.controller.js');

router.get('/', getProducts);