const express = require('express');
const Order = require('../models/Order.js');
const Product = require('../models/product.js');
const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
    const { products } = req.body;
    try {
        let totalAmount = 0;
        for (const item of products) {
            const product = await Product.findById(item.productId);
            totalAmount += product.price * item.quantity;
        }
        const order = new Order({ products, totalAmount });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;