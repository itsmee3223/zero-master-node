const fs = require("fs");
const parse = require("csv-parser");

const liveablePlanet = [];

function isLiveable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("kepler_data.csv")
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
  })
  .on("end", () => {
    console.log(
      liveablePlanet.map((planet) => {
        return planet.kepler_name;
      })
    );
    console.log(`Planet are liveable: ${liveablePlanet.length} planets`);
  });
