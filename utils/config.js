const { NODE_ENV = 'dev' } = process.env;

let APP_PORT = 3000;
let JWT_SECRET = 'secret-phrase';
let DB_ADDRESS = '127.0.0.1';
let DB_PORT = '27017';
let DB_NAME = 'mydb';

// Берем переменные из окружения только при production
if (NODE_ENV === 'production') {
  APP_PORT = process.env.APP_PORT;
  JWT_SECRET = process.env.JWT_SECRET;
  DB_ADDRESS = process.env.DB_ADDRESS;
  DB_PORT = process.env.DB_PORT;
  DB_NAME = process.env.DB_NAME;
}

module.exports = {
  NODE_ENV,
  APP_PORT,
  JWT_SECRET,
  DB_ADDRESS,
  DB_PORT,
  DB_NAME,
};
