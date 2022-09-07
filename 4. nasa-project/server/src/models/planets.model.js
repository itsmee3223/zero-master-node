const fs = require("fs");
const path = require("path");
const parse = require("csv-parser");

const planets = require("./planets.model");

const csvPath = path.join(__dirname, "../data/kepler_data.csv");

function isLiveable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(
        parse({
          skipComments: true,
        })
      )
      .on("data", (data) => {
        if (isLiveable(data)) savePlanet(data);
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`${countPlanetsFound} habitable planets found!`);
        resolve();
      });
  });
}

async function getAllPlanets() {
  return await planets.find({}, {
    '_id': 0, '__v': 0,
  });
}

async function savePlanet(planet) {
  try {
    await planets.updateOne({
      keplerName: planet.kepler_name,
    }, {
      keplerName: planet.kepler_name,
    }, {
      upsert: true,
    });
  } catch(err) {
    console.error(`Could not save planet ${err}`);
  }
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
