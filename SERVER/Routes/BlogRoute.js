const express = require("express");
const BlogRoute = express.Router();

const userAuthenticationMiddleware = require("../middlewares/userAuthenticationMiddleware");

// Route Controllers
const BlogController = require("../Controller/BlogControllers");

// Public Routes
BlogRoute.get("/", BlogController.getBlogs);

// Private Routes
BlogRoute.post(
    "/add-category",
    userAuthenticationMiddleware,
    BlogController.addCategoryHandler
);
BlogRoute.get(
    "/get-category",
    userAuthenticationMiddleware,
    BlogController.getCategoryHandler
);
BlogRoute.post(
    "/remove-category",
    userAuthenticationMiddleware,
    BlogController.deleteCategoryHandler
);

module.exports = BlogRoute;
