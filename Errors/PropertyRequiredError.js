const ValidationError = require('./ValidationError');
const { PROP_REQUIRED_MESSAGE } = require('../utils/codesMessages');

class PropertyRequiredError extends ValidationError {
  constructor(message) {
    super();
    if (message) {
      this.message = message;
    } else {
      this.message = PROP_REQUIRED_MESSAGE;
    }
    this.name = 'PropertyRequiredError';
  }
}

module.exports = PropertyRequiredError;
