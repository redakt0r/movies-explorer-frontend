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
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { auth } from "../../utils/Auth";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "не загружено...",
    email: "не загружено...",
  });
  const [message, setMessage] = useState('')
  const value = { currentUser, setCurrentUser };
  const navigate = useNavigate();

  const clearErrorAndMessage = () => {
    setErrorMessage('');
    setMessage('');
  }

  useEffect(() => {
    auth
      .getUserInfo()
      .then((res) => {
        if (res.user) {
          setIsLoggedIn(true);
          setCurrentUser(res.user);
        }
      })
      .catch((err) => {
        err.then(({ message }) => setErrorMessage(message));
      });
  }, []);

  const handleRegister = ({ name, email, password }) => {
    auth
      .signUp(name, email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res.user);
          navigate("/", { replace: true });
          setMessage('Вы зарегестрированы!')
        }
      })
      .catch((err) => {
        err.then(({ message }) => setErrorMessage(message));
      });
  };

  const handleLogin = ({ email, password }) => {
    auth
      .signIn(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res.user);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        err.then(({ message }) => setErrorMessage(message));
      });
  };

  const handleUpdateUser = ({ name, email }) => {
    auth
      .patchUserInfo(name, email)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setMessage('Данные обновлены!');
        }
      })
      .catch((err) => {
        err.then((err) => {
          if (err.message === "Validation failed") {
            setErrorMessage(err.validation.body.message);
          } else setErrorMessage(err.message);
        });
      });
  };

  const handleSignOut = () => {
    auth.signOut().then((message) => console.log(message));
    setIsLoggedIn(false);
    setCurrentUser({
      name: "не загружено...",
      email: "не загружено...",
    });
    setMessage("Вы вышли из приложения");
  };

  return (
    <CurrentUserContext.Provider value={value}>
      <div className="page">
        <InfoTooltip closeAndClear={clearErrorAndMessage} message={message} error={errorMessage} />
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
                  />
                </>
              }
            />
          </Route>

          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
