const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const AuthError = require('../Errors/AuthError');
const { TOKEN_ERROR_MESSAGE, AUTH_ERROR_MESSAGE } = require('../utils/codesMessages');

function auth(req, res, next) {
  const token = req.cookies.jwt;
  let payload;
  if (!token) {
    throw new AuthError(TOKEN_ERROR_MESSAGE);
  } else {
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      throw new AuthError(AUTH_ERROR_MESSAGE);
    }
    req.user = payload;
    next();
  }
}

module.exports = auth;
