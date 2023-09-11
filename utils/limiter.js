const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  // 150 запросов за 15 мин
  windowMs: 15 * 60 * 1000,
  max: 150,
});

module.exports = limiter;
