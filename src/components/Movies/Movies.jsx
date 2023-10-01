import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useWindowResize from "../../hooks/useWindowResize";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [fullMoviesList, setfullMoviesList] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [namesFilteredMovies, setNamesFilteredMovies] = useState([]);
  const [notFoundError, setNotFoundError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const { setErrorMessage } = useContext(CurrentUserContext);

  let windowWidth = useWindowResize();
  const [numberOfMoviesToRender, setNumberOfMoviesToRender] = useState(
    windowWidth > 1213 ? 12 : windowWidth > 784 ? 8 : 5
  );

  useEffect(() => {
    let count = windowWidth > 1213 ? 12 : windowWidth > 784 ? 8 : 5;
    setNumberOfMoviesToRender(count);
  }, [windowWidth]);

  const handleAddMoreMovies = () => {
    const count = windowWidth > 1213 ? 3 : 2;
    setNumberOfMoviesToRender((prevMoviesToRender) => {
      return prevMoviesToRender + count;
    });
  };

  useEffect(() => {
    const allMoviesFromStorage = localStorage.getItem("FullMoviesList");
    if (allMoviesFromStorage) {
      setfullMoviesList(JSON.parse(allMoviesFromStorage));
    }

    const textFromStorage = localStorage.getItem("SearchText");
    if (textFromStorage) {
      setSearchText(JSON.parse(textFromStorage));
    }

    const searchedMoviesFromStorage = localStorage.getItem("SearchedMovies");
    if (searchedMoviesFromStorage) {
      setSearchedMovies(JSON.parse(searchedMoviesFromStorage));
    }

    const savedMoviesFromStorage = localStorage.getItem("SavedMovies");
    if (savedMoviesFromStorage) {
      setSavedMovies(JSON.parse(savedMoviesFromStorage));
    }

    const namesFilteredMoviesFromStorage = localStorage.getItem(
      "NamesFilteredMovies"
    );
    if (namesFilteredMoviesFromStorage) {
      setNamesFilteredMovies(JSON.parse(namesFilteredMoviesFromStorage));
    }

    const isShortFromStorage = localStorage.getItem("IsShort");
    if (isShortFromStorage) {
      setIsShort(JSON.parse(isShortFromStorage));
    }
  }, []);
  console.log(localStorage);

  const isMovieShort = (movie, isChecked) => {
    if (isChecked) {
      return movie.duration <= 46;
    } else if (!isChecked) {
      return true;
    }
    return false;
  };

  async function searchMovies(text, isChecked = false) {
    let count = windowWidth > 1213 ? 12 : windowWidth > 784 ? 8 : 5;
    setNumberOfMoviesToRender(count);
    setIsLoading(true);
    setIsShort(isChecked);
    localStorage.setItem("IsShort", JSON.stringify(isChecked));

    let moviesInFormat;
    if (fullMoviesList.length === 0) {
      try {
        const allMovies = await moviesApi.getMovies();
        moviesInFormat = await allMovies.map((movie) => {
          return {
            ...movie,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
          };
        });
        const savedMoviesFromApi = await mainApi.getSavedMovies();
        setSavedMovies(savedMoviesFromApi);
        localStorage.setItem("SearchedMovies", JSON.stringify(savedMoviesFromApi));
      } catch (err) {
        setIsLoading(false);
        if (err.message === "Failed to fetch") {
          console.log(err);
          setErrorMessage(
            "Сервер недоступен. Проверьте интернет соединение или повторите попытку позже."
          );
        } else setErrorMessage(err.message);
      }
      if (moviesInFormat) {
        localStorage.setItem("FullMoviesList", JSON.stringify(moviesInFormat));
      }
    } else moviesInFormat = fullMoviesList;

    const namesFiltered = await moviesInFormat.filter((movie) => {
      isMovieShort(movie, isChecked);
      return (
        movie.nameRU.toLowerCase().trim().includes(text.toLowerCase()) ||
        movie.nameEN.toLowerCase().trim().includes(text.toLowerCase())
      );
    });
    if (namesFiltered) {
      localStorage.setItem(
        "NamesFilteredMovies",
        JSON.stringify(namesFiltered)
      );
    }

    const filtered = namesFiltered.filter((movie) => {
      return isMovieShort(movie, isChecked);
    });
    if (filtered.length === 0) {
      setNotFoundError("Ничего не найдено");
    } else {
      setNotFoundError("");
      localStorage.setItem("SearchedMovies", JSON.stringify(filtered));
      localStorage.setItem("SearchText", JSON.stringify(text));
    }

    setfullMoviesList(moviesInFormat);
    setNamesFilteredMovies(namesFiltered);
    setSearchedMovies(filtered);
    setIsLoading(false);
  }

  const handleCheckbox = (namesFilteredMovies, isChecked) => {
    const filtered = namesFilteredMovies.filter((movie) => {
      return isMovieShort(movie, isChecked);
    });
    if (filtered.length === 0) {
      setNotFoundError("Короткометражек не найдено");
    } else {
      setNotFoundError("");
      localStorage.setItem("SearchedMovies", JSON.stringify(filtered));
      localStorage.setItem("IsShort", JSON.stringify(isChecked));
    }
    setSearchedMovies(filtered);
  };

  const onSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
        localStorage.setItem(
          "SavedMovies",
          JSON.stringify([res, ...savedMovies])
        );
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          console.log(err);
          setErrorMessage(
            "Сервер недоступен. Проверьте интернет соединение или повторите попытку позже."
          );
        } else setErrorMessage(err.message);
      });
  };

  const onDeleteMovie = (movie) => {
    const id = savedMovies.find((item) => item.id === movie.id)._id;
    mainApi
      .deleteMovie(id)
      .then((res) => {
        setSavedMovies((previousSavedMovies) =>
          previousSavedMovies.filter((item) => item._id !== id)
        );
        localStorage.setItem(
          "SavedMovies",
          JSON.stringify(savedMovies.filter((item) => item._id !== id))
        );
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          console.log(err);
          setErrorMessage(
            "Сервер недоступен. Проверьте интернет соединение или повторите попытку позже."
          );
        } else setErrorMessage(err.message);
      });
  };

  const filterSavedMovies = (movie, moviesList) => {
    return moviesList.find((item) => item.movieId === movie.id) ? true : false;
  };

  const markedAsSaveMoviesToRender = searchedMovies.map((movie) => ({
    ...movie,
    saved: filterSavedMovies(movie, savedMovies),
  }));

  return (
    <main className="movies">
      <SearchForm
        namesFilteredMovies={namesFilteredMovies}
        searchMovies={searchMovies}
        setSearchText={setSearchText}
        handleCheckbox={handleCheckbox}
        searchText={searchText}
        isShort={isShort}
        setIsShort={setIsShort}
      />
      <MoviesCardList
        isLoading={isLoading}
        movies={markedAsSaveMoviesToRender.slice(0, numberOfMoviesToRender)}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        notFoundError={notFoundError}
      />
      {markedAsSaveMoviesToRender.length > numberOfMoviesToRender && (
        <div className="movies__button-wrapper">
          <button
            className="button movies__button"
            type="button"
            aria-label="Ещё фильмы"
            onClick={handleAddMoreMovies}
          >
            Ещё
          </button>
        </div>
      )}
    </main>
  );
}

export default Movies;
