const mongoose = require('mongoose');
const validator = require('validator');
const { VALIDATE_URL_MESSAGE } = require('../utils/codesMessages');
const AuthError = require('../Errors/AuthError');

const movieSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 150,
    },
    nameEN: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 150,
    },
    country: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 150,
    },
    director: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 150,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 4,
    },
    description: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 1500,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (link) => validator.isURL(link),
        message: VALIDATE_URL_MESSAGE,
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (link) => validator.isURL(link),
        message: VALIDATE_URL_MESSAGE,
      },
    },
    url: {
      type: String,
      required: true,
      validate: {
        validator: (link) => validator.isURL(link),
        message: VALIDATE_URL_MESSAGE,
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

// т.к. id внешнего сервера и mongo имеют разный формат
// переделал схему на сохранение внешнего id как уникального
// и поиск по внешнему id.
movieSchema.statics.findMovieByCredentials = function innerFunction(id) {
  return this.findOne({ id })
    .then((movie) => {
      if (!movie) {
        return Promise.reject(new AuthError());
      }
      return movie;
    });
};

module.exports = mongoose.model('movie', movieSchema);
