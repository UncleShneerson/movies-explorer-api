const { REG_ERROR, REG_MESSAGE } = require('../utils/codesMessages');

class RegError extends Error {
  constructor(message) {
    super();
    if (message) {
      this.message = message;
    } else {
      this.message = REG_MESSAGE;
    }
    this.name = 'RegistrationError';
    this.statusCode = REG_ERROR;
  }
}

module.exports = RegError;
