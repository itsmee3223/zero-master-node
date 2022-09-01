const express = require("express");
const cors = require("cors");
const path = require("path");

const plantesRouter = require("./routes/planets/planets.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// router
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.use("/planets", plantesRouter);

module.exports = app;
