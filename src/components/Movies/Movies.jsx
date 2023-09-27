import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { useState } from "react";
import { moviesApi } from "../../utils/MoviesApi";

function Movies({ onSaveMovie, onDeleteMovie }) {
  const [isLoading, setIsLoading] = useState(false);
  const [fullMoviesList, setfullMoviesList] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isShort, setIsShort] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  async function searchMovies(text, isChecked = false) {
    setIsLoading(true);
    setIsShort(isChecked);
    setSearchText(text);
    console.log(text);
    console.log(isChecked);

    let movies;
    let moviesInFormat;
    try {
      movies = await moviesApi.getMovies();
      moviesInFormat = await movies.map((movie) => {
        return {
          ...movie,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
        };
      })
    } catch (err) {
      if (err.message === "Failed to fetch") {
        setErrorMessage(
          "Сервер недоступен. Проверьте интернет соединение или повторите попытку позже."
        );
      } else setErrorMessage(err.message);
    }

    const filtered = moviesInFormat.filter((movie) => {
      return movie.nameRU.toLowerCase().trim().includes(text.toLowerCase());
    });

    console.log(fullMoviesList);
    console.log(filtered);
    setSearchedMovies(filtered);
    setIsLoading(false);
    console.log(searchedMovies);
  }

  /*     if (!params.isShort) {
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
    console.log(localStorage) */

  return (
    <main className="movies">
      <SearchForm searchMovies={searchMovies} setSearchText={setSearchText} />
      <MoviesCardList
        isLoading={isLoading}
        searchedMovies={searchedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}

export default Movies;
