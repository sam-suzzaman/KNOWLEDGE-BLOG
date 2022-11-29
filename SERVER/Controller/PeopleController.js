const createError = require("http-errors");
const PeopleModel = require("../Model/PeopleModel");

exports.addPeopleHandler = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newPeople = new PeopleModel(req.body);

        if (name && email && password) {
            const result = await newPeople.save();
            console.log(result);
            res.status(200).send({
                success: true,
                message: "User Added Successfully",
            });
        } else {
            next(createError(500, "Enter valid information"));
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
        });
    }
};
