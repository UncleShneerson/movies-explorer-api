// Коды ошибок
const CREATED = 201;
const VALIDATION_ERROR = 400;
const AUTH_ERROR = 401;
const RIGHT_ERROR = 403;
const NOT_FOUND = 404;
const REG_ERROR = 409;
const SERVER_ERROR = 500;

// Сообщения ошибок
const AUTH_ERROR_MESSAGE = 'Необходима авторизация';
const LOGIN_ERROR_MESSAGE = 'Неверные почта или пароль';
const TOKEN_ERROR_MESSAGE = 'Токен не найден';
const NOT_FOUND_MESSAGE = 'Данные не найдены';
const NOT_FOUND_MOVIE_MESSAGE = 'Вы пока не сохранили ни один фильм';
const VALIDATION_MESSAGE = 'Одно или несколько полей не прошли валидацию';
const VALIDATE_URL_MESSAGE = 'Проверьте формат ссылки';
const VALIDATE_EMAIL_MESSAGE = 'Проверьте формат ссылки';
const REG_MESSAGE = 'Пользователь с данным email уже существует';
const RIGHT_ERROR_MESSAGE = 'У вас недостаточно прав';
const PROP_REQUIRED_MESSAGE = 'Одно или несколько значений не переданы';
const WRONG_PATH_MESSAGE = 'Неверно указан путь';
const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка';

// Удачное завершение
const AUTH_OK_MESSAGE = 'Успешная авторизация';
const SIGN_OUT_OK = 'Выход осуществлен';

module.exports = {
  AUTH_ERROR,
  CREATED,
  NOT_FOUND,
  REG_ERROR,
  RIGHT_ERROR,
  SERVER_ERROR,
  VALIDATION_ERROR,
  AUTH_ERROR_MESSAGE,
  LOGIN_ERROR_MESSAGE,
  TOKEN_ERROR_MESSAGE,
  NOT_FOUND_MESSAGE,
  NOT_FOUND_MOVIE_MESSAGE,
  PROP_REQUIRED_MESSAGE,
  REG_MESSAGE,
  RIGHT_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  VALIDATION_MESSAGE,
  VALIDATE_URL_MESSAGE,
  VALIDATE_EMAIL_MESSAGE,
  WRONG_PATH_MESSAGE,
  AUTH_OK_MESSAGE,
  SIGN_OUT_OK,
};
