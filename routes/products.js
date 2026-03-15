const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// إضافة منتج
router.post("/add", async (req, res) => {

  const { name, price, description, category, stock } = req.body;

  try {

    const product = new Product({
      name,
      price,
      description,
      category,
      stock
    });

    await product.save();

    res.json({
      message: "Product added",
      product
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

// عرض المنتجات
router.get("/", async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;