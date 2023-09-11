const { VALIDATION_ERROR, VALIDATION_MESSAGE } = require('../utils/codesMessages');

class ValidationError extends Error {
  constructor(message) {
    super();
    if (message) {
      this.message = message;
    } else {
      this.message = VALIDATION_MESSAGE;
    }
    this.name = 'ValidationError';
    this.statusCode = VALIDATION_ERROR;
  }
}

module.exports = ValidationError;
