import React from "react";
import "./App.css";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "не загружено...",
    email: "не загружено...",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const clearErrorAndMessage = () => {
    setErrorMessage("");
    setMessage("");
  };

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res.user) {
          setIsLoggedIn(true);
          setCurrentUser(res.user);
        }
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage("Сервер недоступен. Проверьте интернет соединение или повторите попытку позже.");
        } else err.then((err) => {
          setErrorMessage(err.message);
        });
      });
  }, []);

  const handleRegister = ({ name, email, password }) => {
    mainApi
      .signUp(name, email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res.user);
          navigate("/movies", { replace: true });
          setMessage("Вы зарегестрированы!");
        }
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage("Сервер недоступен. Проверьте интернет соединение или повторите попытку позже.");
        } else err.then((err) => {
          setErrorMessage(err.message);
        });
      });
  };

  const handleLogin = ({ email, password }) => {
    mainApi
      .signIn(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res.user);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage("Сервер недоступен. Проверьте интернет соединение или повторите попытку позже.");
        } else err.then((err) => {
          setErrorMessage(err.message);
        });
      });
  };

  const handleUpdateUser = ({ name, email }) => {
    mainApi
      .patchUserInfo(name, email)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setMessage("Данные обновлены!");
        }
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage("Сервер недоступен. Проверьте интернет соединение или повторите попытку позже.");
        } else err.then((err) => {
          setErrorMessage(err.message);
        });
      });
  };

  const handleSignOut = () => {
    mainApi.signOut().then((message) => console.log(message));
    setIsLoggedIn(false);
    setCurrentUser({
      name: "не загружено...",
      email: "не загружено...",
    });
    setMessage("Вы вышли из приложения");
    localStorage.clear();
  };

  const contextValue = {currentUser, setCurrentUser, setMessage, setErrorMessage}

    return (
    <CurrentUserContext.Provider value={contextValue}>
      <div className="page">
        <InfoTooltip
          closeAndClear={clearErrorAndMessage}
          message={message}
          error={errorMessage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            <Route
              path="/movies"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Movies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Profile
                    handleEditUser={handleUpdateUser}
                    errorMessage={errorMessage}
                    onSignOut={handleSignOut}
                    setErrorMessage={setErrorMessage}
                    inputError={"ошибка"}
                  />
                </>
              }
            />
          </Route>

          <Route
            path="/signin"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !isLoggedIn ? (
                <Register onRegister={handleRegister} />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
