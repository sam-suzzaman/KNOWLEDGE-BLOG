const express = require("express");
const PeopleRoute = express.Router();

const PeopleController = require("../Controller/PeopleController");
const AvatarUploadMiddleware = require("../middlewares/AvatarUploadMiddleware");

PeopleRoute.post("/add-people", PeopleController.addPeopleHandler);
PeopleRoute.get("/get-people", PeopleController.getAllPeople);
PeopleRoute.put(
    "/update-people",
    AvatarUploadMiddleware,
    PeopleController.updatePeopleHandler
);

module.exports = PeopleRoute;
