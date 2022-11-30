const createError = require("http-errors");
const PeopleModel = require("../Model/PeopleModel");
const { unlink } = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const JWTGenerator = require("../Utilites/JWT_Generator");

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
                const tokenObj = { ID: result._id, email: result.email };
                const TOKEN = JWTGenerator(tokenObj, "1d");
                res.status(200).send({
                    success: true,
                    message: "User Added Successfully",
                    TOKEN,
                });
            } else {
                next(createError(500, "Enter valid information"));
            }
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.loginPeopleHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const isPeopleExist = await PeopleModel.findOne({ email });
            if (isPeopleExist) {
                const isPasswordMatched = await bcrypt.compare(
                    password,
                    isPeopleExist.password
                );
                if (isPasswordMatched) {
                    const tokenObj = {
                        ID: isPeopleExist._id,
                        email: isPeopleExist.email,
                    };
                    const TOKEN = JWTGenerator(tokenObj, "1d");
                    res.status(200).send({
                        success: true,
                        message: "Login Successfully",
                        TOKEN,
                    });
                } else {
                    next(createError(500, "Email or Password not matched"));
                }
            } else {
                next(createError(500, "User not found!!!"));
            }
        } else {
            next(createError(500, "All fields are required"));
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
        if (req.files.length > 0) {
            const { filename } = req.files[0];
            unlink(
                path.join(__dirname, `/../public/uploads/Avatars/${filename}`),
                (err) => {
                    if (err) {
                        console.log(`error from remove handler:${err.message}`);
                    }
                }
            );
        }

        next(createError(500, error.message));
    }
};
