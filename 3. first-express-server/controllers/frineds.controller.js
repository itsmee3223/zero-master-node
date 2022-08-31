const { friends } = require("../models/friendsModel");

function getFriends(req, res) {
  res.json(friends);
}

function createFrineds(req, res) {
  const newFrineds = {
    id: friends.length,
    name: req.body.name,
  };

  friends.push(newFrineds);

  res.status(201).json({
    message: "successfully created",
    data: newFrineds,
  });
}

module.exports = {
  getFriends,
  createFrineds,
};
