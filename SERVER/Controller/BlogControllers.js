const createError = require("http-errors");
const CategoriesModel = require("../Model/CategoriesModel");
const BlogModel = require("../Model/BlogModel");
const { unlink } = require("fs");
const path = require("path");

// GET Routes ===================
exports.getBlogs = (req, res) => {
    res.send("Welcome to blog route");
};

exports.getCategoryHandler = async (req, res, next) => {
    try {
        const result = await CategoriesModel.find({}).select("-__v");
        res.status(200).json({
            status: true,
            result,
        });
    } catch (error) {
        next(createError(500, error.message));
    }
};

// POST +++++++++++++++++++++++++++++
exports.addBlogHandler = async (req, res, next) => {
    try {
        const { postTitle } = req.body;
        const isTitleExist = await BlogModel.findOne({ postTitle });
        if (isTitleExist) {
            const { filename } = req.files[0];
            unlink(
                path.join(
                    __dirname,
                    `/../public/uploads/BlogThumbnail/${filename}`
                ),
                (err) => {
                    if (err) {
                        console.log(`error from remove handler:${err.message}`);
                    }
                }
            );
            next(createError(500, "Post title already exists"));
        } else {
            const mergedBlog = {
                ...req.body,
                postThumbnail: req.files[0].filename,
            };
            const newBlogData = new BlogModel(mergedBlog);
            const result = await newBlogData.save();

            res.status(200).json({
                status: true,
                message: "Blog posted Successfully",
                result,
            });
        }
    } catch (error) {
        const { filename } = req.files[0];
        console.log(error);
        unlink(
            path.join(
                __dirname,
                `/../public/uploads/BlogThumbnail/${filename}`
            ),
            (err) => {
                if (err) {
                    console.log(`error from remove handler:${err.message}`);
                }
            }
        );
        next(createError(500, error.message));
    }
};
exports.addCategoryHandler = async (req, res, next) => {
    const { category } = req.body;
    try {
        if (category) {
            const isCategoryExist = await CategoriesModel.findOne({
                categoryName: category,
            });
            if (isCategoryExist) {
                next(500, "Category already exists");
            } else {
                const newCategory = new CategoriesModel({
                    categoryName: category,
                });
                const result = await newCategory.save();

                res.status(200).json({
                    status: true,
                    result,
                });
            }
        } else {
            next(createError(500, "Category not found!!!"));
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.deleteCategoryHandler = async (req, res, next) => {
    try {
        const { removedIDs } = req.body;

        if (!removedIDs) {
            next(createError(500, "There is no Categories to delete!!!"));
        } else {
            const tempRemovedCategories = [];

            removedIDs.forEach((itemID) => {
                temp = CategoriesModel.findByIdAndDelete({ _id: itemID });
                tempRemovedCategories.push(temp);
            });
            const result = await Promise.all(tempRemovedCategories); //resoled all promise
            res.status(200).json({
                status: true,
                message: `${
                    removedIDs.length > 1 ? "Category" : "Catogries"
                } deleted successfully`,
                result,
            });
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

// DELETE ++++++++++++++++++++++++++
