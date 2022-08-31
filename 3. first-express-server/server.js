const path = require("path");

const express = require("express");

const friendsRouter = require("./routes/friends.router");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/friends", friendsRouter);
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
