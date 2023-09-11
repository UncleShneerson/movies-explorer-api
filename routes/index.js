const router = require('express').Router();

const usersRoute = require('./users');
const moviesRoute = require('./movies');
const notFoundRoute = require('./wrongPath');
const { createUser, login, logout } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { signUpValidate, logInValidate } = require('../middlewares/validation');

// Регистрация и авторизация
router.post('/signup', signUpValidate, createUser);
router.post('/signin', logInValidate, login);
router.get('/signout', logout);

// Защита роутов
router.use(auth);

// Данные
router.use('/users', usersRoute);
router.use('/movies', moviesRoute);

// Путь не найден
router.use('*', notFoundRoute);

module.exports = router;
