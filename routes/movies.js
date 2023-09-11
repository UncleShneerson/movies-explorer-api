const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const { movieCreateValidate, IdValidate } = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', movieCreateValidate, createMovie);
router.delete('/:_id', IdValidate, deleteMovie);

module.exports = router;
