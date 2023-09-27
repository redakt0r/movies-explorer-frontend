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

  const isMovieShort = (movie, isChecked) => {
    if (isChecked) {
      return movie.duration <= 40;
    } else if (!isChecked) {
      return true
    }
    return false;
  }

  async function searchMovies(text, isChecked = false) {
    setIsLoading(true);
    setIsShort(isChecked);
    setSearchText(text);
    console.log(text);
    console.log(isChecked);


    let moviesInFormat;
    try {
      let allMovies = await moviesApi.getMovies();
      moviesInFormat = await allMovies.map((movie) => {
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
    const namesFiltered = await moviesInFormat.filter((movie) => {
      isMovieShort(movie, isChecked)
      return movie.nameRU.toLowerCase().trim().includes(text.toLowerCase()) ||
        movie.nameEN.toLowerCase().trim().includes(text.toLowerCase());
    });
    const filtered = namesFiltered.filter((movie) => {
      return isMovieShort(movie, isChecked)
    })

    console.log(fullMoviesList);
    console.log(namesFiltered);
    console.log(filtered);
    setSearchedMovies(filtered);
    setIsLoading(false);
    console.log(searchedMovies);
  }

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
