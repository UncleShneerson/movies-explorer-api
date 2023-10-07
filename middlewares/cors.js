const allowedCors = [
  "https://api.uncle.movies.nomoredomainsicu.ru",
  "http://api.uncle.movies.nomoredomainsicu.ru",
  "https://uncle.movies.nomoredomainsicu.ru",
  "http://uncle.movies.nomoredomainsicu.ru",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
  "http://127.0.0.1:3002",
  "http://localhost:3000",
  "http://localhost:3001",
];

const cors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";
  const requestHeaders = req.headers["access-control-request-headers"];
  res.header("Access-Control-Allow-Credentials", true);
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  if (method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", DEFAULT_ALLOWED_METHODS);
    res.header("Access-Control-Allow-Headers", requestHeaders);
    res.end();
    return;
  }
  next();
};

module.exports = cors;
