const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/usersRouter');
const cardsRouter = require('./routes/cardsRouter');


const {PORT = 3000} = process.env;

const app = express();


mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use((req, res, next) => {
  req.user = {
    _id: '5fddef9768603661f6463a92',
  };
  next();
});


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
