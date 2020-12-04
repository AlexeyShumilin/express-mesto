const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '../data', 'cards.json');

router.get('/', (req, res) => {
  const cards = fs.createReadStream(cardsPath, {encoding: 'utf8'});
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  cards.pipe(res);
});

module.exports = router;