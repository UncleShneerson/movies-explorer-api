const router = require('express').Router();
const { WRONG_PATH_MESSAGE } = require('../utils/codesMessages');
const NotFoundError = require('../Errors/NotFoundError');

const sendAllert = () => {
  throw new NotFoundError(WRONG_PATH_MESSAGE);
};

router.use('/', sendAllert);

module.exports = router;
