const createError = require("http-errors");
const multer = require("multer");

function FileUploadObjectGenerator(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
) {
    const UPLOAD_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`;

    const STORAGE = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOAD_FOLDER);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix =
                Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + "-" + file.originalname);
        },
    });

    const upload = multer({
        storage: STORAGE,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(500, error_msg));
            }
        },
    });
    return upload;
}

module.exports = FileUploadObjectGenerator;
