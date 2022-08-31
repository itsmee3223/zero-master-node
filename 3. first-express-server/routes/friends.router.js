const express = require("express");

const friendsController = require("../controllers/frineds.controller");

const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.createFrineds);

module.exports = friendsRouter;
