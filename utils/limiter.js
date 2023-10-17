const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  // 500 запросов за 15 мин
  windowMs: 15 * 60 * 1000,
  max: 500,
});

module.exports = limiter;
