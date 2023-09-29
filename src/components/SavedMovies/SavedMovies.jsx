import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import { useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";

function SavedMovies() {
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [notFoundError, setNotFoundError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [namesFilteredMovies, setNamesFilteredMovies] = useState(moviesToRender);

  useEffect(() => {
    mainApi.getSavedMovies().then((movies) => {
      if (movies.length === 0) {
        setNotFoundError("Здесь будут ваши сохраненные фильмы");
      } else {
        setMoviesToRender(movies);
        setSavedMovies(movies);
        setNamesFilteredMovies(movies);
        setNotFoundError("");
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
    })
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

  return (
    <main className="saved-movies">
      <SearchForm
        namesFilteredMovies={namesFilteredMovies}
        searchMovies={searchInSaved}
        setSearchText={setSearchText}
        handleCheckbox={handleCheckbox}
      />
      <MoviesCardList
        movies={moviesToRender}
        notFoundError={notFoundError} /* onDeleteMovie={onDeleteMovie} */
      />
    </main>
  );
}

export default SavedMovies;
