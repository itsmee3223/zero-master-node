const { launchesModel } = require("../../model/launches.model");

function getAllLaunches(req, res) {
  res.status(200).json(launchesModel());
}

module.exports = {
  getAllLaunches,
};
