import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import useWindowResize from "../../hooks/useWindowResize";

function MoviesCardList({
  searchedMovies,
  onSaveMovie,
  onDeleteMovie,
  isLoading,
}) {
  let windowWidth = useWindowResize();
  const [moviesToRender, setMoviesToRender] = useState(
    windowWidth > 1213 ? 12 : windowWidth > 784 ? 8 : 5
  );
  const location = useLocation();
  const routeWithMoreButton = location.pathname === "/movies";

  useEffect(() => {
    if (!routeWithMoreButton) {
      setMoviesToRender(100);
    } else {
      let count = windowWidth > 1213 ? 12 : windowWidth > 784 ? 8 : 5;
      setMoviesToRender(count);
    }
  }, [windowWidth]);

  const handleAddMoreMovies = () => {
    const count = windowWidth > 1213 ? 3 : 2;
    setMoviesToRender((prevMoviesToRender) => {
      return prevMoviesToRender + count;
    });
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="section movies-list" aria-label="Список фильмов">
          {searchedMovies.length !== 0 ? (
            <ul className="movies-list__list">
              {searchedMovies
                .map((movie) => {
                  return (
                    <MoviesCard
                      movie={movie}
                      onSaveMovie={onSaveMovie}
                      onDeleteMovie={onDeleteMovie}
                    />
                  );
                })
                .slice(0, moviesToRender)}
            </ul>
          ) : (
            <p className="movies-list__error">Ничего не найдено</p>
          )}
          {routeWithMoreButton && searchedMovies.length > moviesToRender && (
            <button
              className="button movies-list__button"
              type="button"
              aria-label="Ещё фильмы"
              onClick={handleAddMoreMovies}
            >
              Ещё
            </button>
          )}
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
