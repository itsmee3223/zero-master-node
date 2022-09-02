const { Router } = require("express");
const { getAllLaunches } = require("./launches.controller");

const launchesRouter = Router();

launchesRouter.get("/", getAllLaunches);

module.exports = launchesRouter;
