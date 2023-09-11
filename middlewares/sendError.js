const { SERVER_ERROR, SERVER_ERROR_MESSAGE } = require('../utils/codesMessages');

const sendError = (err, req, res, next) => {
  const { statusCode = SERVER_ERROR, message } = err;

  res.status(statusCode).send({
    message: statusCode === SERVER_ERROR
      ? SERVER_ERROR_MESSAGE
      : message,
  }).end();
  next();
};

module.exports = sendError;
