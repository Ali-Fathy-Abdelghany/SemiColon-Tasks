const express = require("express");
const router = express.Router();

const users = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Mike Johnson", age: 40 },
];

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const userInfo = users.find((user) => user.id == id);
    if (userInfo === undefined) return res.status(404).send(`User not found.`);
    return res.send(`User ID is ${id}.`);
});

module.exports = router;
