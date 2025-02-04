const express = require('express');
const Product = require('../models/product.js');
const router = express.Router();

// Add a product
router.post("/", async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        const product = new Product({ name, price, quantity });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;