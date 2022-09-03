const { launchesModel, addNewLaunch, existsLaunch, abortLaunch } = require("../../model/launches.model");

function getAllLaunches(req, res) {
  res.status(200).json(launchesModel());
}

function createNewLaunch(req, res) {
  const launch = req.body

  if(!launch.mission || !launch.rocket || !launch.target || !launch.launchDate) {
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

function abortedLaunch(req, res) {
  const id = Number(req.params.id)

  if(!existsLaunch(id)) return res.status(404).json({ error: 'Launch not found' })
  
  return res.status(200).json(abortLaunch(id))
}

module.exports = {
  getAllLaunches,
  createNewLaunch,
  abortedLaunch
};
