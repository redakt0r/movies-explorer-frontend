import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  const routeWithFooter =
  (location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/saved-movies');

  const routeWithHeader =
  (location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/profile');

  return (
    <div className='page'>
      {routeWithHeader && <Header isLoggedIn={isLoggedIn}/>}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/saved-movies' element={<SavedMovies/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      {routeWithFooter && <Footer/>}
    </div>
  );
}

export default App;
