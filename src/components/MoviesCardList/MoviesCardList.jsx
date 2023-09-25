import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import useWindowResize from "../../hooks/useWindowResize";

function MoviesCardList({}) {
  let windowWidth = useWindowResize();
  const [moviesToRender, setMoviesToRender] = useState(
    windowWidth > 1213 ? 12 : windowWidth > 784 ? 8 : 5
  );
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const routeWithMoreButton = location.pathname === "/movies";
  const allMovies = JSON.parse(localStorage.getItem("moviesList"));

  const moviesSample = [
    allMovies[0],
    allMovies[1],
    allMovies[2],
    allMovies[3],
    allMovies[4],
    allMovies[5],
    allMovies[6],
    allMovies[7],
    allMovies[8],
    allMovies[9],
    allMovies[10],
    allMovies[11],
    allMovies[12],
    allMovies[13],
    allMovies[14],
    allMovies[15],
    allMovies[16],
    allMovies[17],
    allMovies[18],
    allMovies[19],
    allMovies[20],
  ];

  useEffect(() => {
    if (!routeWithMoreButton) {
      setMoviesToRender(moviesSample.length);
    } else {
      let count = windowWidth > 1213 ? 12 : windowWidth > 784 ? 8 : 5;
      setMoviesToRender(count);
    }
  }, [windowWidth, routeWithMoreButton]);

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
          <ul className="movies-list__list">
            {moviesSample
              .map((movie) => {
                return <MoviesCard movie={movie} />;
              })
              .slice(0, moviesToRender)}
          </ul>
          {routeWithMoreButton && moviesSample.length < moviesToRender && (
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
