const express = require("express");
const BlogRoute = express.Router();

// Route Controllers
const BlogController = require("../Controller/BlogControllers");

// Public Routes
BlogRoute.get("/", BlogController.getBlogs);

// Private Routes
BlogRoute.post("/add-category", BlogController.addCategoryHandler);
BlogRoute.get("/get-category", BlogController.getCategoryHandler);
BlogRoute.post("/remove-category", BlogController.deleteCategoryHandler);

module.exports = BlogRoute;
