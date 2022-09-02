const { Router } = require("express");
const { getAllLaunches, createNewLaunch } = require("./launches.controller");

const launchesRouter = Router();

launchesRouter.route('/').get(getAllLaunches).post(createNewLaunch);

module.exports = launchesRouter;
