import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { useState } from "react";

function Movies({ onSaveMovie, onDeleteMovie }) {
  const [fullMoviesList, setfullMoviesList] = useState(
    JSON.parse(localStorage.getItem("fullMoviesList"))
  );
  const [searchedMovies, setSearchedMovies] = useState([]);

/*   moviesApi
      .getMovies()
      .then((res) => {
        const fullMoviesList = res.map((movie) => {
          return {
            ...movie,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          }
        })
        localStorage.setItem("fullMoviesList", JSON.stringify(fullMoviesList));
        console.log(res)
        console.log(fullMoviesList)
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage("Сервер недоступен. Проверьте интернет соединение или повторите попытку позже.");
        } else setErrorMessage(err.message);
      }); */

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
