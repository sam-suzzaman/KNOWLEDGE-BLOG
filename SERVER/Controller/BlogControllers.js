const createError = require("http-errors");
const CategoriesModel = require("../Model/CategoriesModel");

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
