const { Router } = require("express");
const { getAllPlanets } = require("./plantes.controller");
const plantesRouter = Router();

plantesRouter.get("/", getAllPlanets);

module.exports = plantesRouter;
