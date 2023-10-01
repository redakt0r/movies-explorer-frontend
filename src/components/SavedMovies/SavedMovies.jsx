import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import { useContext, useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedMovies() {
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [notFoundError, setNotFoundError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [namesFilteredMovies, setNamesFilteredMovies] =
    useState(moviesToRender);

  const { setErrorMessage } = useContext(CurrentUserContext);

  useEffect(() => {
    mainApi.getSavedMovies().then((movies) => {
      if (movies.length === 0) {
        setNotFoundError("Здесь будут ваши сохраненные фильмы");
      } else {
        setMoviesToRender(movies);
        setSavedMovies(movies);
        setNamesFilteredMovies(movies);
        setNotFoundError("");
        localStorage.setItem("SavedMovies", JSON.stringify(movies));
      }
    });
  }, [setMoviesToRender]);

  const isMovieShort = (movie, isChecked) => {
    if (isChecked) {
      return movie.duration <= 46;
    } else if (!isChecked) {
      return true;
    }
    return false;
  };

  const searchInSaved = (text, isChecked = false) => {
    setIsShort(isChecked);
    setSearchText(text);

    const namesFiltered = savedMovies.filter((movie) => {
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
      setNotFoundError("Ничего не найдено");
    } else setNotFoundError("");
    setNamesFilteredMovies(namesFiltered);
    setSearchedMovies(filtered);
    setMoviesToRender(filtered);
  };

  const handleCheckbox = (namesFilteredMovies, isChecked) => {
    const filtered = namesFilteredMovies.filter((movie) => {
      return isMovieShort(movie, isChecked);
    });
    if (filtered.length === 0) {
      setNotFoundError("Ничего не найдено");
    } else {
      setNotFoundError("");
    }
    setSearchedMovies(filtered);
    setMoviesToRender(filtered);
  };

  const onDeleteMovieInSavedMoviesRoute = (movie) => {
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
        setMoviesToRender((previousMoviesToRender) =>
          previousMoviesToRender.filter((item) => item._id !== id)
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

  return (
    <main className="saved-movies">
      <SearchForm
        namesFilteredMovies={namesFilteredMovies}
        searchMovies={searchInSaved}
        setSearchText={setSearchText}
        handleCheckbox={handleCheckbox}
        setIsShort={setIsShort}
        searchText={searchText}
      />
      <MoviesCardList
        movies={moviesToRender}
        notFoundError={notFoundError}
        onDeleteMovie={onDeleteMovieInSavedMoviesRoute}
      />
    </main>
  );
}

export default SavedMovies;
