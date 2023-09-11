const { AUTH_ERROR, LOGIN_ERROR_MESSAGE } = require('../utils/codesMessages');

class AuthError extends Error {
  constructor(message) {
    super();
    if (message) {
      this.message = message;
    } else {
      this.message = LOGIN_ERROR_MESSAGE;
    }
    this.name = 'AuthentificationError';
    this.statusCode = AUTH_ERROR;
  }
}

module.exports = AuthError;
