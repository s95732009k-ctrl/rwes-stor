const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// إنشاء طلب شراء
router.post("/create", async (req, res) => {

  const { productName, playerId, price } = req.body;

  try {

    const order = new Order({
      productName,
      playerId,
      price
    });

    await order.save();

    res.send("Order created successfully");

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

// عرض جميع الطلبات
router.get("/", async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;
