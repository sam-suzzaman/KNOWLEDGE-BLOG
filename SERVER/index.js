const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

app.use(express.json()); // json parsing
require("dotenv").config(); // dotenv
app.use("/public", express.static("public")); // to access photos

//Cors
const cors = require("cors");
app.use(cors());

// All Imports:
const DBConnectionHandler = require("./Utilites/DBConnectionHandler");
const BlogRoute = require("./Routes/BlogRoute");
const PeopleRoute = require("./Routes/PeopleRoute");
const ErrorHandingMiddleware = require("./middlewares/ErrorHandingMiddleware");
const createError = require("http-errors");

// ==============================================

// Database Connection
DBConnectionHandler();

// main routes
app.use("/api/v1/blog", BlogRoute); // Blog Related Route
app.use("/api/v1/people", PeopleRoute); // User Related Route

// default route
app.get("/test", (req, res) => {
    res.send("Testing route");
});

app.get("/", (req, res) => {
    res.send("Server is Running");
});

//  404 Error Route and Handler==========================================
const NotFoundHandler = (req, res, next) => {
    next(createError(404, "Your requested content was not found!"));
};

app.use(NotFoundHandler); // Not Found Route Handler
app.use(ErrorHandingMiddleware.CommonErrorHandler); // Global Error Handler
// =====================================================================

app.listen(port, () => {
    console.log(`Listening at port: http://localhost:${port}/`);
});
