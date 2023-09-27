import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { useState } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [fullMoviesList, setfullMoviesList] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [namesFilteredMovies, setNamesFilteredMovies] = useState([]);
  const [notFoundError, setNotFoundError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [markAsSavedMoviesToRender, setMarkAsSavedMoviesToRender] = useState(
    []
  );

  const [errorMessage, setErrorMessage] = useState("");

  const isMovieShort = (movie, isChecked) => {
    if (isChecked) {
      return movie.duration <= 46;
    } else if (!isChecked) {
      return true;
    }
    return false;
  };

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
      });
    } catch (err) {
      if (err.message === "Failed to fetch") {
        setErrorMessage(
          "Сервер недоступен. Проверьте интернет соединение или повторите попытку позже."
        );
      } else setErrorMessage(err.message);
    }

    const namesFiltered = await moviesInFormat.filter((movie) => {
      isMovieShort(movie, isChecked);
      return (
        movie.nameRU.toLowerCase().trim().includes(text.toLowerCase()) ||
        movie.nameEN.toLowerCase().trim().includes(text.toLowerCase())
      );
    });
    const filtered = namesFiltered.filter((movie) => {
      return isMovieShort(movie, isChecked);
    });
    if (filtered.length === 0) {
      setNotFoundError(true);
    } else setNotFoundError(false);

    console.log(namesFiltered);
    console.log(filtered);
    setfullMoviesList(moviesInFormat);
    setNamesFilteredMovies(namesFiltered);
    setSearchedMovies(filtered);
    setIsLoading(false);
    console.log(searchedMovies);
  }

  const handleCheckbox = (namesFilteredMovies, isChecked) => {
    const filtered = namesFilteredMovies.filter((movie) => {
      return isMovieShort(movie, isChecked);
    });
    setSearchedMovies(filtered);
  };

  const onSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
        console.log("savedMovies");
        console.log(savedMovies);
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage(
            "Сервер недоступен. Проверьте интернет соединение или повторите попытку позже."
          );
        } else setErrorMessage(err.message);
      });
  };

  const onDeleteMovie = (movie) => {
    console.log(movie);
    console.log(savedMovies)
    const id = savedMovies.find(item => item.id == movie.id)._id;
    mainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies(previousSavedMovies => previousSavedMovies.filter(item => item._id !== id))
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage("Сервер недоступен. Проверьте интернет соединение или повторите попытку позже.");
        } else setErrorMessage(err.message);
      });
  }

  const filterSavedMovies = (movie, moviesList) => {
    return moviesList.find((item) => item.movieId == movie.id);
  };

  const markedAsSaveMoviesToRender = searchedMovies.map((movie) => ({
    ...movie,
    saved: filterSavedMovies(movie, savedMovies),
  }));
  console.log(markedAsSaveMoviesToRender);
  console.log(savedMovies);

  return (
    <main className="movies">
      <SearchForm
        namesFilteredMovies={namesFilteredMovies}
        searchMovies={searchMovies}
        setSearchText={setSearchText}
        handleCheckbox={handleCheckbox}
      />
      <MoviesCardList
        isLoading={isLoading}
        searchedMovies={markedAsSaveMoviesToRender}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        notFoundError={notFoundError}
      />
    </main>
  );
}

export default Movies;
