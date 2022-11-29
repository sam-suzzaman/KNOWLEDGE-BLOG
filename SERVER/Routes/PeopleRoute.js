const express = require("express");
const PeopleRoute = express.Router();

const PeopleController = require("../Controller/PeopleController");

PeopleRoute.post("/add-people", PeopleController.addPeopleHandler);

module.exports = PeopleRoute;
