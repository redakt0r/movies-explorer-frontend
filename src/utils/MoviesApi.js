import { MOVIES_API_CONFIG } from "../constants/constants";

class MoviesApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(res.json());
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}

export const moviesApi = new MoviesApi(MOVIES_API_CONFIG);
