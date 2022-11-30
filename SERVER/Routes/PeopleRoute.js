const express = require("express");
const PeopleRoute = express.Router();

const PeopleController = require("../Controller/PeopleController");
const AvatarUploadMiddleware = require("../middlewares/AvatarUploadMiddleware");
const userAuthenticatioMiddleware = require("../middlewares/userAuthenticationMiddleware");

// Public Routes
PeopleRoute.post("/add-people", PeopleController.addPeopleHandler);
PeopleRoute.post("/login-people", PeopleController.loginPeopleHandler);

// Private Routes
PeopleRoute.get(
    "/get-people",
    userAuthenticatioMiddleware,
    PeopleController.getAllPeople
);

PeopleRoute.put(
    "/update-people",
    AvatarUploadMiddleware,
    PeopleController.updatePeopleHandler
);

module.exports = PeopleRoute;
