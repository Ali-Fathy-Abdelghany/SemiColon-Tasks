const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./Routes/users");
const itemRoutes = require("./Routes/items");

app.use("/users", userRoutes);
app.use("/items", itemRoutes);

app.get("/", (req, res) => {
    res.send(`Welcome to our store!`);
});

app.get("/about", (req, res) => {
    res.send("This is a brief description of the application.");
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
