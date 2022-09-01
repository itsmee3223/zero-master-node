const express = require("express");
const cors = require("cors");
const plantesRouter = require("./routes/planets/planets.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// router
app.use("/planets", plantesRouter);

module.exports = app;
