const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

app.use(express.json()); // json parsing
require("dotenv").config(); // dotenv

//Cors
const cors = require("cors");
app.use(cors());

// Database Connection
const DBConnectionHandler = require("./Utilites/DBConnectionHandler");
DBConnectionHandler();

// Routers handlers/middlewares import

// Utilites import

// main routes

// default route
app.get("/test", (req, res) => {
    res.send("Testing route");
});
app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.listen(port, () => {
    console.log(`Listening at port: http://localhost:${port}/`);
});
