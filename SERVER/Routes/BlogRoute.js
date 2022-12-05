const express = require("express");
const BlogRoute = express.Router();

// Middlwarese
const userAuthenticationMiddleware = require("../middlewares/userAuthenticationMiddleware");
const BlogThumbnailUploadMiddleware = require("../middlewares/BlogThumbnailUploadMiddleware");


// Route Controllers
const BlogController = require("../Controller/BlogControllers");

// Public Routes

// Private Routes
BlogRoute.post(
    "/add-blog",
    BlogThumbnailUploadMiddleware,
    BlogController.addBlogHandler
);
BlogRoute.get("/get-blog", BlogController.getBlogsHandler);
BlogRoute.get("/single-blog/:blogID", BlogController.getSingleBlogHandler);
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
BlogRoute.delete("/delete-all-blog", BlogController.deleteAllBlogHandler);

module.exports = BlogRoute;
