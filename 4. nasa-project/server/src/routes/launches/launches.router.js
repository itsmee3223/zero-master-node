const { Router } = require("express");
const { getAllLaunches, createNewLaunch, abortedLaunch } = require("./launches.controller");

const launchesRouter = Router();

launchesRouter.route('/').get(getAllLaunches).post(createNewLaunch);
launchesRouter.delete('/:id', abortedLaunch)

module.exports = launchesRouter;
