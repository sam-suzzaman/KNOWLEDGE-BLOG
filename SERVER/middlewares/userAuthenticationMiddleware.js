const jwt = require("jsonwebtoken");
const PeopleModel = require("../Model/PeopleModel");
const createError = require("http-errors");

const userAuthenticatioMiddleware = async (req, res, next) => {
    let token;

    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];

            const { email, ID } = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await PeopleModel.findOne({ email, _id: ID }).select(
                "-password"
            );
            next();
        } catch (error) {
            next(createError(500, error.message));
        }
    } else {
        next(createError(500, "Unauthorized User"));
    }
};

module.exports = userAuthenticatioMiddleware;
