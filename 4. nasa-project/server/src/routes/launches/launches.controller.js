const { launchesModel, addNewLaunch } = require("../../model/launches.model");

function getAllLaunches(req, res) {
  res.status(200).json(launchesModel());
}

function createNewLaunch(req, res) {
  const launch = req.body
  addNewLaunch(launch)

  res.status(201).json(launch)
}

module.exports = {
  getAllLaunches,
  createNewLaunch
};
