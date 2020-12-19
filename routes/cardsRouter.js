const cardsRouter = require('express').Router();
const {
  getCards,
  likeCard,
  createCard,
  deleteCard,
  dislikeCard,
} = require('../controllers/cards');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:cardId', deleteCard);
cardsRouter.delete('/cards/:cardId/likes', dislikeCard);
cardsRouter.put('/cards/:cardId/likes', likeCard);

module.exports = cardsRouter;