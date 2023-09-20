import { AuthApiConfig } from "../constants/constants";

class Auth {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибочка: ${res.status}`);
    }
    return res.json();
  }

  signUp(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    }).then((res) => this._checkResponse(res))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  signIn( email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then((res) => this._checkResponse(res))
  }

  signOut() {
    return fetch(`${this._baseUrl}/signout`, {
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

}

export const auth = new Auth(AuthApiConfig);
