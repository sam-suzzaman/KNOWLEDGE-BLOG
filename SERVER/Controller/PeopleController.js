const createError = require("http-errors");
const PeopleModel = require("../Model/PeopleModel");
const { unlink } = require("fs");
const path = require("path");

// GET Controllers ====================================
exports.getAllPeople = async (req, res, next) => {
    try {
        const result = await PeopleModel.find({}, "name email role -_id");
        res.status(200).json({
            status: true,
            message: "Data get Successfully",
            result,
        });
    } catch (error) {
        next(createError(500, error.message));
    }
};

//  POST Controllers ==================================
exports.addPeopleHandler = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isPeopleExist = await PeopleModel.findOne({ email });

        if (isPeopleExist) {
            next(createError(500, "Email Already exists"));
        } else {
            if (name && email && password) {
                const newPeople = new PeopleModel(req.body);
                const result = await newPeople.save();
                res.status(200).send({
                    success: true,
                    message: "User Added Successfully",
                });
            } else {
                next(createError(500, "Enter valid information"));
            }
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

// UPDATE Controllers
exports.updatePeopleHandler = async (req, res, next) => {
    let result;
    try {
        const isPeopleExist = await PeopleModel.findOne({
            email: req.body.email,
        });
        if (isPeopleExist) {
            if (req.files && req.files.length > 0) {
                const mergedPeople = {
                    ...req.body,
                    avatar: req.files[0].filename,
                };
                result = await PeopleModel.updateOne(
                    { email: req.body.email },
                    { $set: mergedPeople },
                    { runValidators: true }
                );
            } else {
                result = await PeopleModel.updateOne(
                    { email: req.body.email },
                    { $set: req.body },
                    { runValidators: true }
                );
            }
            res.status(200).send({
                success: true,
                message: "User Updated Successfully",
            });
        } else {
            if (req.files.length > 0) {
                const { filename } = req.files[0];
                unlink(
                    path.join(
                        __dirname,
                        `/../public/uploads/Avatars/${filename}`
                    ),
                    (err) => {
                        if (err) {
                            console.log(
                                `error from remove handler:${err.message}`
                            );
                        }
                    }
                );
            }
            next(createError(500, "User not available"));
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};
