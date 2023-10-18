const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { VALIDATE_EMAIL_MESSAGE } = require('../utils/codesMessages');

const AuthError = require('../Errors/AuthError');

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => validator.isEmail(email),
        message: VALIDATE_EMAIL_MESSAGE,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    versionKey: false,
  },
);

userSchema.statics.findUserByCredentials = function innerFunction(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthError());
      }
      return bcrypt.compare(password, user.password)
        .then((isMatched) => {
          if (!isMatched) {
            return Promise.reject(new AuthError());
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
