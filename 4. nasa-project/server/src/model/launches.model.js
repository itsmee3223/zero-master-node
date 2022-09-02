const launches = new Map();

let latestFligtNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Expoloration X",
  rocket: "Explor IS1",
  launchDate: new Date("December 27 2030"),
  destination: "Kepler-442 b",
  customer: ["NASA", "Ramanda Ajisaka Asyraf", "Silvia Ranti"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function launchesModel() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFligtNumber++;
  launches.set(
    latestFligtNumber,
    Object.assign(launch, {
      flightNumber: latestFligtNumber,
      customer: ["NASA", "Ramanda Ajisaka Asyraf", "Silvia Ranti"],
      upcoming: true,
      success: true,
    })
  );
}

module.exports = {
  launches,
  launchesModel,
  addNewLaunch,
};
