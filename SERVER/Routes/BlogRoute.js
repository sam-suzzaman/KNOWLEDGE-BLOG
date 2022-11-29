const express = require("express");
const BlogRoute = express.Router();

// Route Controllers
const { getBlogs } = require("../Controller/BlogControllers");

// Public Routes
BlogRoute.get("/", getBlogs);

// Private Routes

module.exports = BlogRoute;
