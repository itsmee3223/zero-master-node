const launches = new Map();

let latestFligtNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Expoloration X",
  rocket: "Explor IS1",
  launchDate: new Date("December 27 2030"),
  target: "Kepler-442 b",
  customers: ["NASA", "Ramanda Ajisaka Asyraf", "Silvia Ranti"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunch(launchId) {
  return launches.has(launchId);
}

function launchesModel() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFligtNumber++;
  launches.set(
    latestFligtNumber,
    Object.assign(launch, {
      flightNumber: latestFligtNumber,
      customers: ["NASA", "Ramanda Ajisaka Asyraf", "Silvia Ranti"],
      upcoming: true,
      success: true,
    })
  );
}

function abortLaunch(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  launches,
  launchesModel,
  addNewLaunch,
  existsLaunch,
  abortLaunch
};
