const express = require("express");
const router = express.Router();

const items = [
    { id: 101, name: "T-shirt", category: "clothing" },
    { id: 102, name: "Jeans", category: "clothing" },
    { id: 103, name: "Laptop", category: "electronics" },
    { id: 104, name: "Headphones", category: "electronics" },
    { id: 105, name: "Sofa", category: "furniture" },
];

router.get("/", (req, res) => {
    const category = req.query.category;
    if (!category) return res.send("No category specified.");
    const chosenItems = items.filter((item) => item.category === category);
    if (chosenItems.length === 0) {
        return res.status(404).send("No items found in this category.");
    }
    const itemNames = chosenItems.map((item) => item.name);
    return res.send(itemNames);
});

module.exports = router;
