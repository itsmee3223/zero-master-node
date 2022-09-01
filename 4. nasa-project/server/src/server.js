const http = require("http");
const app = require("./app");

const { loadPlanetdata } = require("./model/planets.model");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

async function startServer() {
  await loadPlanetdata();
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

startServer();
