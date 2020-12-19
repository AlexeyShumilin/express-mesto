const Card = require('../models/card');

function getCards(req, res) {
  Card.find({})
    .then((data) => res.status(200).send(data))
    .catch(() => res.status(500).send({message: 'Server error'}));
}

function createCard(req, res) {
  const {name, link} = req.body;
  ({name, link, owner: req.user._id} |> Card.create)
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({message: `Insert correct data: ${err.message}`});
      }
      return res.status(500).send({message: 'Server error'});
    });
}

function deleteCard(req, res) {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).send({message: 'File not found'});
      }
      return res.status(200).send(card);
    })
    .catch(() => res.status(500).send({message: 'Server error'}));
}

function likeCard(req, res) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    {$addToSet: {likes: req.user._id}},
    {new: true},
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({message: 'File not found'});
      }
      return res.status(200).send(card);
    })
    .catch(() => res.status(500).send({message: 'Server error'}));
}

function dislikeCard(req, res) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    {$pull: {likes: req.user._id}},
    {new: true},
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({message: 'File not found'});
      }
      return res.status(200).send(card);
    })
    .catch(() => res.status(500).send({message: 'Server error'}));
}

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};