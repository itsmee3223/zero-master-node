const fs = require("fs");
const path = require("path");
const parse = require("csv-parser");

const liveablePlanet = [];
const csvPath = path.join(__dirname, "../data/kepler_data.csv");

function isLiveable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetdata() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(
        parse({
          skipComments: true,
        })
      )
      .on("data", (data) => {
        if (isLiveable(data)) liveablePlanet.push(data);
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`Planet are liveable: ${liveablePlanet.length} planets`);
        resolve();
      });
  });
}

module.exports = {
  planets: liveablePlanet,
  loadPlanetdata,
};
