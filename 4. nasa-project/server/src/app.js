const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const plantesRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// middleware
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// router
app.use("/planets", plantesRouter);
app.use("/launches", launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
