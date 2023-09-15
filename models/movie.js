const mongoose = require('mongoose');
const validator = require('validator');
const { VALIDATE_URL_MESSAGE } = require('../utils/codesMessages');

const movieSchema = new mongoose.Schema(
  {
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    nameEN: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    country: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    director: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
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
      maxlength: 80,
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
    thumbnail: {
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

module.exports = mongoose.model('movie', movieSchema);
