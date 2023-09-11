const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const AuthError = require('../Errors/AuthError');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => validator.isEmail(email),
        message: 'Проверьте формат email',
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      required: true,
      type: String,
      minlength: 2,
      maxlength: 30,
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
        return Promise.reject(new AuthError('Неверные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((isMatched) => {
          if (!isMatched) {
            return Promise.reject(new AuthError('Неверные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
