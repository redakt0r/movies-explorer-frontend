import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { useState } from "react";

function SavedMovies({savedMovies, onSaveMovie, onDeleteMovie }) {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const searchMovies = (params) => {
    let sortedMovies = [];
    localStorage.setItem("moviesSearchParams", JSON.stringify(params));
    if (!params.isShort) {
      let sortedMoviesRu = savedMovies.filter((movie) => {
        return movie.nameRU
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase());
      });
      let sortedMoviesEn = savedMovies.filter((movie) => {
        return movie.nameEN
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase());
      });
      sortedMovies = sortedMoviesRu.concat(sortedMoviesEn);
    } else {
      let sortedMoviesRu = savedMovies.filter((movie) => {
        return (movie.duration <= 40 && movie.nameRU
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase()));
      });
      let sortedMoviesEn = savedMovies.filter((movie) => {
        return (movie.duration <= 40 && movie.nameEN
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase()));
      });
      sortedMovies = sortedMoviesRu.concat(sortedMoviesEn);
    }
    localStorage.setItem("searchedMovies", JSON.stringify(sortedMovies));
    setSearchedMovies(sortedMovies);
  };
  return (
      <main className='saved-movies'>
        <SearchForm searchMovies={searchMovies} />
        <MoviesCardList searchedMovies={searchedMovies} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />
      </main>
  );
}

export default SavedMovies;
