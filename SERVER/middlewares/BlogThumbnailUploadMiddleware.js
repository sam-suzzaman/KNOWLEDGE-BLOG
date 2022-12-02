const FileUploadObjectGenerator = require("../Utilites/FileUploadeObjectGenerator");
const createError = require("http-errors");

const BlogThumbnailUploadMiddleware = (req, res, next) => {
    const upload = FileUploadObjectGenerator(
        "BlogThumbnail",
        ["image/jpeg", "image/jpg", "image/png"],
        40000000,
        "Only jgp,jpeg or png format allowed"
    );
    upload.any()(req, res, (err) => {
        if (err) {
            console.log(`from upload error:${err.message}`);
            next(createError(500, `from upload error:${err.message}`));
        } else {
            next();
        }
    });
};

module.exports = BlogThumbnailUploadMiddleware;
