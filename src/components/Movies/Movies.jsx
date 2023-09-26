import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { useState } from "react";

function Movies() {
  const [movieslist, setMoviesList] = useState(
    JSON.parse(localStorage.getItem("moviesList"))
  );
  const [searchedMovies, setSearchedMovies] = useState([]);

  const searchMovies = (params) => {
    let sortedMovies = [];
    localStorage.setItem("moviesSearchParams", JSON.stringify(params));
    if (!params.isShort) {
      let sortedMoviesRu = movieslist.filter((movie) => {
        return movie.nameRU
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase());
      });
      let sortedMoviesEn = movieslist.filter((movie) => {
        return movie.nameEN
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase());
      });
      sortedMovies = sortedMoviesRu.concat(sortedMoviesEn);
    } else {
      let sortedMoviesRu = movieslist.filter((movie) => {
        return (movie.duration <= 40 && movie.nameRU
          .toLowerCase()
          .trim()
          .includes(params.movie.toLowerCase()));
      });
      let sortedMoviesEn = movieslist.filter((movie) => {
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
    <main className="movies">
      <SearchForm searchMovies={searchMovies} />
      <MoviesCardList searchedMovies={searchedMovies} />
    </main>
  );
}

export default Movies;
