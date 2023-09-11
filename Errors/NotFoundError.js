const { NOT_FOUND, NOT_FOUND_MESSAGE } = require('../utils/codesMessages');

class NotFoundError extends Error {
  constructor(message) {
    super();
    if (message) {
      this.message = message;
    } else {
      this.message = NOT_FOUND_MESSAGE;
    }
    this.name = 'NotFoundError';
    this.statusCode = NOT_FOUND;
  }
}

module.exports = NotFoundError;
