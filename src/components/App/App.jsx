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
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { auth } from "../../utils/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "не загружено...",
    email: "не загружено...",
  });
  const value = {currentUser, setCurrentUser}
  const navigate = useNavigate();

  const handleRegister = ({ name, email, password }) => {
    auth
      .signUp(name, email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLogin = ({ email, password }) => {
    auth
      .signIn(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={value}>
      <div className="page">
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
                  <Profile />
                </>
              }
            />
          </Route>

          <Route path="/signin" element={<Login onLogin={handleLogin}/>} />
          <Route path="/signup" element={<Register onRegister={handleRegister}/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
