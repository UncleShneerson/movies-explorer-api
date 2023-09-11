const NotFoundError = require('../Errors/NotFoundError');
const NotEnoughRightsError = require('../Errors/NotEnoughRightsError');
const ValidationError = require('../Errors/ValidationError');

const { CREATED } = require('../utils/errorCodes');

const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      if (movies.length === 0) {
        next(new NotFoundError('Сохраненных фильмов нет'));
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
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
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
  Movie.findById(req.params._id)
    .orFail(() => new NotFoundError('Данных c указанным id не существует'))
    .then((movie) => {
      const { _id, owner } = movie;
      if (String(owner) !== req.user._id) {
        throw new NotEnoughRightsError();
      }
      Movie.findByIdAndRemove(_id)
        .orFail(() => new NotFoundError('Данных c указанным id не существует'))
        .then((cardData) => res.send(cardData))
        .catch(next);
    })
    .catch(next);
};
