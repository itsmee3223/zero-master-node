const { launchesModel, addNewLaunch } = require("../../model/launches.model");

function getAllLaunches(req, res) {
  res.status(200).json(launchesModel());
}

function createNewLaunch(req, res) {
  const launch = req.body

  if(!launch.mission || !launch.rocket || !launch.destination || !launch.launchDate) {
    return res.status(400).json({
      error: 'Missing required launch property'
    })
  }

  const launchDate = new Date(launch.launchDate)
  if(isNaN(launchDate)){
    return res.status(400).json({ error: 'Invalid format date' })
  }

  addNewLaunch(launch)

  res.status(201).json(launch)
}

module.exports = {
  getAllLaunches,
  createNewLaunch
};
