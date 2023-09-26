import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { useState } from "react";

function Movies({ onSaveMovie, onDeleteMovie }) {
  const [fullMoviesList, setfullMoviesList] = useState(
    JSON.parse(localStorage.getItem("fullMoviesList"))
  );
  const [searchedMovies, setSearchedMovies] = useState([]);

  const searchMovies = (params) => {
    let sortedMovies = [];
    localStorage.setItem("moviesSearchParams", JSON.stringify(params));
    if (!params.isShort) {
      let sortedMoviesRu = fullMoviesList.filter((movie) => {
        return movie.nameRU
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase());
      });
      let sortedMoviesEn = fullMoviesList.filter((movie) => {
        return movie.nameEN
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase());
      });
      sortedMovies = sortedMoviesRu.concat(sortedMoviesEn);
    } else {
      let sortedMoviesRu = fullMoviesList.filter((movie) => {
        return (movie.duration <= 40 && movie.nameRU
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase()));
      });
      let sortedMoviesEn = fullMoviesList.filter((movie) => {
        return (movie.duration <= 40 && movie.nameEN
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase()));
      });
      sortedMovies = sortedMoviesRu.concat(sortedMoviesEn);
    }
    localStorage.setItem("searchedMovies", JSON.stringify(sortedMovies));
    setSearchedMovies(sortedMovies);
    console.log(sortedMovies)
    console.log(localStorage)
  };
  return (
    <main className="movies">
      <SearchForm searchMovies={searchMovies} />
      <MoviesCardList searchedMovies={searchedMovies} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />
    </main>
  );
}

export default Movies;
