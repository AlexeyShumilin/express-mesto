const usersRouter = require('express').Router();
const {
  getUser,
  getUsers,
  createUser,
  updateAvatar,
  updateUser,
} = require('../controllers/users');

usersRouter.get('/users', getUsers);
usersRouter.get('/users/:id', getUser);
usersRouter.patch('/users/me', updateUser);
usersRouter.post('/users', createUser);
usersRouter.patch('/users/me/avatar', updateAvatar);

module.exports = usersRouter;
