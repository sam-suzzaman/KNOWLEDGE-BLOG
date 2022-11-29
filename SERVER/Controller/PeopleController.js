const createError = require("http-errors");

exports.addPeopleHandler = (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (name && email && password) {
            //    statements
            res.status(200).send({
                success: true,
                message: "whatever msg",
                // data: myData,
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
