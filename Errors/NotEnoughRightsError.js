const { RIGHT_ERROR, RIGHT_ERROR_MESSAGE } = require('../utils/codesMessages');

class NotEnoughRightsError extends Error {
  constructor(message) {
    super();
    if (message) {
      this.message = message;
    } else {
      this.message = RIGHT_ERROR_MESSAGE;
    }
    this.name = 'NotEnoughRightsError';
    this.statusCode = RIGHT_ERROR;
  }
}

module.exports = NotEnoughRightsError;
