const { Joi, celebrate } = require('celebrate');

const regexURL = /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%/&=?.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|\\^[\]`]+)?)/;
const regexEmail = /[\w-]{1,20}@[a-z0-9-]{1,20}\.{1}[a-z0-9-]*/;

// Валидация авторизации
const signUpValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().pattern(regexEmail).required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).max(30),
  }),
});

const logInValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().pattern(regexEmail).required(),
    password: Joi.string().min(4).required(),
  }),
});

// Валидация пользователей
const userUpdateValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().pattern(regexEmail),
  }),
});

// Валидация карточек
const movieCreateValidate = celebrate({
  body: Joi.object().keys({
    movieId: Joi.number().required(),
    nameRU: Joi.string().min(2).max(30).required(),
    nameEN: Joi.string().min(2).max(30).required(),
    country: Joi.string().min(2).max(30).required(),
    director: Joi.string().min(2).max(30).required(),
    duration: Joi.number().required(),
    year: Joi.string().min(2).max(4).required(),
    description: Joi.string().min(2).max(80).required(),
    image: Joi.string().pattern(regexURL).required(),
    trailerLink: Joi.string().pattern(regexURL).required(),
    thumbnail: Joi.string().pattern(regexURL).required(),
  }),
});

// Валидация ID
const IdValidate = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24),
  }),
});

module.exports = {
  signUpValidate,
  logInValidate,
  userUpdateValidate,
  movieCreateValidate,
  IdValidate,
};
