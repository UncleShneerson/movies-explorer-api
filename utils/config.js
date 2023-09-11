const {
  NODE_ENV = 'dev',
  APP_PORT = 3000,
  JWT_SECRET = 'secret-phrase',
  DB_ADDRESS = '127.0.0.1',
  DB_PORT = '27017',
  DB_NAME = 'bitfilmsdb',
} = process.env;

module.exports = {
  NODE_ENV,
  APP_PORT,
  JWT_SECRET,
  DB_ADDRESS,
  DB_PORT,
  DB_NAME,
};
