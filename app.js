

const express = require('express'), path = require('path'), userRouter = require('./routes/users.js'),
  cardRouter = require('./routes/cards.js'), userIdRouter = require('./routes/usersId.js'), {PORT = 3000} = process.env,
  app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// подключаем мидлвары, роуты и всё остальное...


app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use('/users', userIdRouter);
app.use('/', (req, res) => {
  res.status(404).json({message: 'Запрашиваемый ресурс не найден'});
});

app.listen(PORT, () => {
});