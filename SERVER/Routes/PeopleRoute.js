const express = require("express");
const PeopleRoute = express.Router();

const PeopleController = require("../Controller/PeopleController");

PeopleRoute.post("/add-people", PeopleController.addPeopleHandler);
PeopleRoute.get("/get-people", PeopleController.getAllPeople);

module.exports = PeopleRoute;
