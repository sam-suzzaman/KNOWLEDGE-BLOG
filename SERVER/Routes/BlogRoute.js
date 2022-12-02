const express = require("express");
const BlogRoute = express.Router();

const userAuthenticationMiddleware = require("../middlewares/userAuthenticationMiddleware");
const BlogThumbnailUploadMiddleware = require("../middlewares/BlogThumbnailUploadMiddleware");

// Route Controllers
const BlogController = require("../Controller/BlogControllers");

// Public Routes
BlogRoute.get("/", BlogController.getBlogs);

// Private Routes
BlogRoute.post(
    "/add-blog",
    BlogThumbnailUploadMiddleware,
    BlogController.addBlogHandler
);
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
