import React from 'react';
import "./App.css";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Main />
              <Footer/>
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
          } />
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

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
