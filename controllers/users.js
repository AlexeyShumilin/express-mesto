const User = require('../models/user');

function getUsers(req, res) {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(() => res.status(500).send({message: 'Server error'}));
}

function getUser(req, res) {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({message: 'User with id not found'});
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(500).send({message: 'Server error'}));
}

function createUser(req, res) {
  const {name, about, avatar} = req.body;
  ({name, about, avatar} |> User.create)
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({message: `Insert correct data: ${err.message}`});
      }
      return res.status(500).send({message: 'Server error'});
    });
}

function updateUser(req, res) {
  const {name, about} = req.body;
  User.findByIdAndUpdate(req.user._id, {name, about}, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({message: 'User not found'});
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(500).send({message: 'Server error'}));
}

function updateAvatar(req, res) {
  const {avatar} = req.body;
  User.findByIdAndUpdate(req.user._id, {avatar}, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({message: 'User not found'});
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(500).send({message: 'Server error'}));
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updateAvatar,
};