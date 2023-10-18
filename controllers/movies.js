const NotFoundError = require('../Errors/NotFoundError');
const NotEnoughRightsError = require('../Errors/NotEnoughRightsError');
const ValidationError = require('../Errors/ValidationError');

const { CREATED, NOT_FOUND_MOVIE_MESSAGE } = require('../utils/codesMessages');

const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      if (movies.length === 0) {
        next(new NotFoundError(NOT_FOUND_MOVIE_MESSAGE));
      } else {
        res.send(movies);
      }
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    url,
    nameRU,
    nameEN,
    id,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    url,
    nameRU,
    nameEN,
    id,
    owner: req.user._id,
  })
    .then((movieData) => res.status(CREATED).send(movieData))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError());
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findMovieByCredentials(req.params.id)
    .then((movie) => {
      const { _id, owner } = movie;
      if (String(owner) !== req.user._id) {
        throw new NotEnoughRightsError();
      }
      Movie.findByIdAndRemove(_id)
        .orFail(() => new NotFoundError())
        .then((cardData) => res.send(cardData))
        .catch(next);
    })
    .catch(next);
};
