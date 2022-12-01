const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
    categoryName: {
        type: String,
        trim: true,
        required: true,
    },
});

const CategoriesModel = mongoose.model("Categorie", CategoriesSchema);

module.exports = CategoriesModel;
