const createError = require("http-errors");
const PeopleModel = require("../Model/PeopleModel");

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
        const isPeopleExist = PeopleModel.find({ email });

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
