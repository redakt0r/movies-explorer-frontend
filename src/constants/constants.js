const AUTH_API_CONFIG = {
  baseUrl: "http://localhost:3000",
  //baseUrl: "https://api.groovy-movie.nomoredomainsicu.ru",
  headers: {
    "Content-Type": "application/json",
  },
};

const MOVIES_API_CONFIG = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  //baseUrl: "https://api.groovy-movie.nomoredomainsicu.ru",
  headers: {
    "Content-Type": "application/json",
  },
};

const EMAIL_PATTERN = '^\w+@[a-zA-Z0-9._%+-]+?\.[a-zA-Z]{2,3}$';

module.exports = {
  AUTH_API_CONFIG,
  EMAIL_PATTERN,
  MOVIES_API_CONFIG
}
