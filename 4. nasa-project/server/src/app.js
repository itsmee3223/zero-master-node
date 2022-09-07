const path = require("path");

const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const plantesRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const app = express();

// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use(helmet())
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
app.use("/v1/planets", plantesRouter);
app.use("/v1/launches", launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
